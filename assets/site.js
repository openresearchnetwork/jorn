(() => {
  const body = document.body;
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-navigation]');
  const navParents = document.querySelectorAll('.nav-parent');

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    body.classList.remove('menu-open');
    navParents.forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
      button.closest('.has-children')?.classList.remove('is-open');
    });
  };

  menuButton?.addEventListener('click', () => {
    const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    if (willOpen && header && navigation) {
      navigation.style.top = `${Math.max(0, header.getBoundingClientRect().bottom)}px`;
    }
    menuButton.setAttribute('aria-expanded', String(willOpen));
    navigation?.classList.toggle('is-open', willOpen);
    body.classList.toggle('menu-open', willOpen);
  });

  navParents.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.has-children');
      const willOpen = !item?.classList.contains('is-open');
      navParents.forEach((other) => {
        if (other === button) return;
        other.setAttribute('aria-expanded', 'false');
        other.closest('.has-children')?.classList.remove('is-open');
      });
      button.setAttribute('aria-expanded', String(willOpen));
      item?.classList.toggle('is-open', willOpen);
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) closeMenu();
  });

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const modal = document.querySelector('[data-search-modal]');
  const searchInput = document.querySelector('[data-search-input]');
  const resultsContainer = document.querySelector('[data-search-results]');
  const searchStatus = document.querySelector('[data-search-status]');
  const searchOpenButtons = document.querySelectorAll('[data-search-open]');
  const searchCloseButtons = document.querySelectorAll('[data-search-close]');
  let searchDocuments = [];
  let searchRoot = new URL('./', window.location.href);
  let indexLoaded = false;
  let previousFocus = null;

  const escapeHTML = (value = '') => value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);

  const stripHTML = (value = '') => {
    const temporary = document.createElement('div');
    temporary.innerHTML = value;
    return temporary.textContent || '';
  };

  const loadSearchIndex = async () => {
    if (indexLoaded || !resultsContainer) return;
    indexLoaded = true;
    try {
      const indexURL = new URL(resultsContainer.dataset.searchIndex, window.location.href);
      searchRoot = new URL('../', indexURL);
      const response = await fetch(indexURL);
      if (!response.ok) throw new Error('Search index unavailable');
      const index = await response.json();
      searchDocuments = index.docs || [];
    } catch (_) {
      searchStatus.textContent = 'Search is temporarily unavailable.';
    }
  };

  const openSearch = async (trigger) => {
    if (!modal) return;
    previousFocus = trigger || document.activeElement;
    closeMenu();
    modal.hidden = false;
    body.classList.add('search-open');
    await loadSearchIndex();
    window.setTimeout(() => searchInput?.focus(), 10);
  };

  const closeSearch = () => {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    body.classList.remove('search-open');
    searchInput.value = '';
    resultsContainer.innerHTML = '';
    searchStatus.textContent = 'Start typing to search the journal.';
    previousFocus?.focus();
  };

  const resultExcerpt = (text, terms) => {
    const clean = stripHTML(text).replace(/\s+/g, ' ').trim();
    const lower = clean.toLowerCase();
    const firstPosition = terms.reduce((position, term) => {
      const found = lower.indexOf(term);
      return found >= 0 && (position < 0 || found < position) ? found : position;
    }, -1);
    const start = Math.max(0, (firstPosition < 0 ? 0 : firstPosition) - 70);
    const excerpt = `${start > 0 ? '…' : ''}${clean.slice(start, start + 190)}${clean.length > start + 190 ? '…' : ''}`;
    return escapeHTML(excerpt);
  };

  const runSearch = () => {
    if (!searchInput || !resultsContainer || !searchStatus) return;
    const query = searchInput.value.trim().toLowerCase();
    const terms = query.split(/\s+/).filter((term) => term.length > 1);
    resultsContainer.innerHTML = '';

    if (!terms.length) {
      searchStatus.textContent = 'Start typing to search the journal.';
      return;
    }

    const ranked = searchDocuments.map((document) => {
      const title = stripHTML(document.title || '').toLowerCase();
      const text = stripHTML(document.text || '').toLowerCase();
      const matchesAll = terms.every((term) => title.includes(term) || text.includes(term));
      const score = terms.reduce((total, term) => total + (title.includes(term) ? 5 : 0) + (text.includes(term) ? 1 : 0), 0);
      return { document, matchesAll, score };
    }).filter((result) => result.matchesAll).sort((a, b) => b.score - a.score).slice(0, 8);

    searchStatus.textContent = ranked.length
      ? `${ranked.length} result${ranked.length === 1 ? '' : 's'} for “${searchInput.value.trim()}”`
      : `No results for “${searchInput.value.trim()}”`;

    ranked.forEach(({ document: entry }) => {
      const result = window.document.createElement('a');
      result.className = 'search-result';
      result.href = new URL(entry.location, searchRoot).href;
      result.innerHTML = `<strong>${escapeHTML(stripHTML(entry.title || 'Untitled'))}</strong><span>${resultExcerpt(entry.text || '', terms)}</span>`;
      resultsContainer.appendChild(result);
    });
  };

  searchOpenButtons.forEach((button) => button.addEventListener('click', () => openSearch(button)));
  searchCloseButtons.forEach((button) => button.addEventListener('click', closeSearch));
  searchInput?.addEventListener('input', runSearch);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!modal?.hidden) closeSearch();
      else closeMenu();
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (modal?.hidden) openSearch(document.querySelector('[data-search-open]'));
      else closeSearch();
    }
  });
})();

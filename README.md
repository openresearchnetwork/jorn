# JORN website

The public website for the **Journal of the Open Research Network (JORN)**, a proposed community-governed, Diamond Open Access overlay journal supported by Open Science Labs.

## Local development

Create the Conda environment and preview the site:

```bash
conda env create -f conda.yaml
conda activate jorn
makim pages.preview
```

To produce a clean static build:

```bash
makim pages.build
```

MkDocs writes the generated site to `build/`.

## Project structure

- `pages/` — journal content and browser assets
- `theme/` — custom MkDocs/Jinja templates
- `mkdocs.yml` — navigation, metadata, and build configuration
- `PLAN.md` — concept, governance, and implementation reference

The custom theme is intentionally dependency-light. It includes responsive navigation, client-side search, accessible interaction patterns, and reusable editorial components without a frontend build step.

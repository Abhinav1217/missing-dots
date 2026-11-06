[![Netlify Status](https://api.netlify.com/api/v1/badges/30432a28-f73f-431d-94b8-3c19ee4b7761/deploy-status)](https://app.netlify.com/sites/practical-feynman-973618/deploys)
# Missing-Dots.in
A blog for my mother. She plans to write about historical stuff. The domain name she chose is a play. The concept is that she is going to write from a lesser known perspective. Hence url is read as "missing dots in _history/handloom/culture_".

## Prerequisites

- Hugo extended 0.169.0 (pinned in `netlify.toml`)
- git-lfs

## Development
```bash
# Start local dev server
hugo server
```

## Writing a post
Add a Markdown file under `content/post/`, or run `hugo new post/<section>/<name>.md`. Posts start as drafts; set `draft: false` to publish. Use the existing spelling of tags, categories and series. `Needle-Thread` is the stored term for "Needle & Thread", which keeps its old URL.

## Deployment
Netlify builds and publishes every push to `master`. Build settings live in `netlify.toml`. Netlify also needs `GIT_LFS_ENABLED=true` in its environment variables, or [builds will fail](https://community.netlify.com/t/builds-fail-after-new-commit-to-git-lfs/1362).

## Theme
The layouts and styles in this repo started as the [Anubis](https://github.com/mitrichius/hugo-theme-anubis) theme, which is now archived. They are maintained here directly, with `Series` links, reading time and image changes added.

## LICENSE
Site code is under MIT. Anubis's original licence is kept in `LICENSE-anubis`.
Content is Creative Common, except for sourced images which should have their own attribution, or specified.
favicon is under creative commons sourced from https://www.iconfinder.com/search/?q=parchment&price=free&style=flat. Only modification done is conversion using https://favicon.io/favicon-converter/

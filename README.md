[![Netlify Status](https://api.netlify.com/api/v1/badges/30432a28-f73f-431d-94b8-3c19ee4b7761/deploy-status)](https://app.netlify.com/sites/practical-feynman-973618/deploys)
# Missing-Dots.in
A blog for my mother. She plans to write about historical stuff. The domain name she chose is a play. The concept is that she is going to write from a lesser known perspective. Hence url is read as missing dots in _history/handloom/culture_.

## Prerequisites

- Hugo > 0.55.0
- git-lfs

## Content Management

This project has been configured to work with [Forestry](https://forestry.io). It uses custom front-matter, sidebar setting to make working easier for my mother. Import the repo in forestry to get started automatically.

## Deployment and hosting with Netlify

Import your site in [Netlify](https://netlify.com)

1. Create a new site in Netlify and import your repository.
2. Set the build command to: `hugo --gc --minify`
3. Set the publish directory to: `public`
4. Make sure to set `HUGO_VERSION` to 0.55.0 or above (tested with 0.62.2)
5. Make sure to set `GIT_LFS_ENABLED` and set it to `true`.

That's it, now your site gets deployed automatically on `git push` or when saving documents from Forestry.

*N.B*
- Automatic deployment can be disabled to save on free quota.
- Make sure to enable `GIT_LFS_ENABLED` or else [netlify builds will fail](https://community.netlify.com/t/builds-fail-after-new-commit-to-git-lfs/1362).
- This currently uses slightly modified [hugo-kiera](https://themes.gohugo.io/theme/hugo-kiera/) theme.

## Development
```bash
# Start local dev server
hugo server
```
For more information, see [official Hugo documentation](https://gohugo.io/getting-started/).

## Customization
Slight modification has been done to add `Series` feature.

## TODO
- [x] Deploy site.  
- [x] Configure stuff to make things really simple.  
- [x] Add RSS subscription.  
- [ ] Cleanup config files for unused stuff left from trying out other themes.  
- [ ] Add google analytics.  
- [ ] Add google ad-sense.  
- [ ] Add site-wide search.  
- [ ] Add discus comment.  
- [ ] Add newsletter.  
- [ ] Theme switcher and dark mode.  
- [ ] Improve images rendered in blog-post.  
- [ ] Improve overall layout of site.  


## LICENSE
MIT

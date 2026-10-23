# OmniCloud website

Static pages for the OmniCloud iOS app, hosted on GitHub Pages with the custom
domain https://omnicloud.objboy.com/ (`CNAME`). The existing GitHub Pages address
https://doubledimple.github.io/omnicloud-site/ and page paths are retained.

- `index.html`: application home page
- `privacy.html`: privacy policy, including the Google API data usage and Limited Use disclosure
- `terms.html`: terms of service
- `assets/style.css`: shared responsive layout, system light/dark appearance,
  keyboard focus styles and print styles
- `assets/site.js`: optional enhancement that opens the legal-page contents on
  desktop, collapses it on smaller screens, and marks the selected section;
  the pages and contents remain usable without JavaScript

Legal pages use a sidebar on large screens and an expandable contents list on
phones and smaller iPad windows. Tables scroll within the article on narrow
screens, and long URLs wrap. The responsive update preserves the existing legal
content, effective dates, Google API disclosures, and `#google` / `#revoke` links.

The original page URLs are used on the Google OAuth consent screen. The Apple
app can link to `https://omnicloud.objboy.com/privacy.html` and
`https://omnicloud.objboy.com/terms.html`.

Plain HTML, CSS and JavaScript; no dependencies or build step. To preview locally:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/ and check the home, privacy and terms pages.

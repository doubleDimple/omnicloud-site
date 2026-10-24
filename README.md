# OmniCloud website

Static pages for the OmniCloud iOS app, hosted on GitHub Pages with the custom
domain https://omnicloud.objboy.com/ (`CNAME`). The existing GitHub Pages address
https://doubledimple.github.io/omnicloud-site/ and page paths are retained.

- `index.html`: multi-cloud application home page, supported services and connection methods
- `privacy.html`: privacy policy for all connections, including the Google API data usage and Limited Use disclosure
- `terms.html`: terms of service
- `assets/style.css`: shared responsive layout, system light/dark appearance,
  keyboard focus styles and print styles
- `assets/site.js`: optional enhancement that opens the legal-page contents on
  desktop, collapses it on smaller screens, and marks the selected section;
  the pages and contents remain usable without JavaScript

Legal pages use a sidebar on large screens and an expandable contents list on
phones and smaller iPad windows. Tables scroll within the article on narrow
screens, and long URLs wrap. The provider directory uses two columns on wider
screens and one column on phones. All pages follow the system light/dark appearance.

The October 24, 2026 content update covers Amazon Web Services, Microsoft Azure,
Google Cloud, Oracle Cloud Infrastructure, Hetzner Cloud, netcup and OVHcloud,
plus the separate Cloudflare workspace and user-provided SSH servers. Capability
descriptions follow the iOS app's provider registrations: Oracle, Hetzner and
Google Cloud offer instance management; AWS, Azure, netcup and OVHcloud currently
offer instance viewing. Cloudflare R2 browsing/downloads and Worker information
are not described as full deployment or upload tools.

Privacy disclosures also cover optional private iCloud sync, server-side Nginx
and certificate tasks, on-device request logs, subscriptions and the current
Google project setup. Keep the Google API Limited Use disclosure and the existing
`privacy.html#google`, `privacy.html#other-providers` and `privacy.html#revoke`
URLs when updating these pages. Policy effective dates change when the content
changes; they are not the date of a visual-only update.

The original page URLs are used on the Google OAuth consent screen. The Apple
app can link to `https://omnicloud.objboy.com/privacy.html` and
`https://omnicloud.objboy.com/terms.html`.

Plain HTML, CSS and JavaScript; no dependencies or build step. To preview locally:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/ and check the home, privacy and terms pages.

Before publishing, check all local links and section anchors, narrow phone and
iPad/desktop widths, both appearances, enlarged text and keyboard navigation.
Keep the legal pages and their contents usable without JavaScript. No analytics,
external font service, new runtime dependency or build step is required.

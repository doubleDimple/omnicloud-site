// Native disclosure stays usable when JavaScript is unavailable.
const contents = document.querySelector('.toc');
if (contents) {
  const desktop = window.matchMedia('(min-width: 1024px)');
  const syncContentsLayout = () => { contents.open = desktop.matches; };
  syncContentsLayout();
  desktop.addEventListener('change', syncContentsLayout);

  const updateCurrentSection = () => {
    contents.querySelectorAll('a[href]').forEach((link) => {
      if (link.hash === window.location.hash) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };
  updateCurrentSection();
  window.addEventListener('hashchange', updateCurrentSection);
}

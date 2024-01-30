/* CSS */
import "@js/parts/css";

/* JS */
import "@js/parts/lazyloading";
import "@js/parts/handle-sliders";
import "@js/parts/handle-mobile-nav";
import "@js/parts/handle-modal";
import "@js/parts/handle-filters-trigger";
import "@js/parts/os-handler";
import "@js/parts/handle-tile-transaction-button-hover";
import "@js/parts/handle-global-map";

/**
 * Alpine JS
 * Best to put it last so that all other potential JS is available
 * when components start getting initialized.
 */
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

/**
 * Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR");
  });
}
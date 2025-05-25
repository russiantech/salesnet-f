// Service Worker with TypeScript
/// <reference lib="webworker" />

// Cast the global scope to ServiceWorkerGlobalScope
const sw = self as unknown as ServiceWorkerGlobalScope;

const CACHE_NAME = 'salesnet-pwa-v1';
const urlsToCache: string[] = [
  '/',
  '/manifest.json',
  '/src/main.tsx',
  // Core CSS files
  '/assets/css/theme.min.css',
  '/assets/css/theme.rtl.min.css',
  '/assets/css/custom.css',
  '/assets/icons/salesnet-icons.min.css',
  // Vendor CSS
  '/assets/vendor/choices_js/choices.min.css',
  '/assets/vendor/swiper/swiper-bundle.min.css',
  '/assets/vendor/simplebar/simplebar.min.css',
  // JavaScript files
  '/assets/js/theme-switcher.js',
  '/assets/js/theme.min.js',
  '/assets/vendor/choices_js/choices.min.js',
  '/assets/vendor/simplebar/simplebar.min.js',
  // Fonts
  '/assets/fonts/inter-variable-latin.woff',
  '/assets/icons/salesnet-icons.woff',
  // Icons and images
  '/assets/img/us/logos/favicon.ico',
  '/assets/app-icons/icon-180x180.png'
];

sw.addEventListener('install', (event: ExtendableEvent) => {
  console.log('SW: Install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache: Cache) => {
        console.log('SW: Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

sw.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request)
      .then((response: Response | undefined) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
// Service Worker with TypeScript
declare const self: ServiceWorkerGlobalScope;

interface CacheStorage {
  open(cacheName: string): Promise<Cache>;
  keys(): Promise<string[]>;
  delete(cacheName: string): Promise<boolean>;
  match(request: RequestInfo): Promise<Response | undefined>;
}

const CACHE_NAME = 'salesnet-pwa-v1';
const urlsToCache: string[] = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/assets/img/us/logos/favicon.svg'
];

self.addEventListener('install', (event: ExtendableEvent) => {
  console.log('SW: Install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache: Cache) => {
        console.log('SW: Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
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
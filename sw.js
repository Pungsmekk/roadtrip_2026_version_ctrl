const CACHE_NAME = 'cbp-roadtrip-2026-v1';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './images/camp-beer-pressure-2026-banner.png',
  './images/day1-hamburg.jpg',
  './images/day2-praha.jpg',
  './images/day3-novarock-arrival.jpg',
  './images/day4-7-novarock.jpg',
  './images/day8-zakopane.jpg',
  './images/day9-krakow-wieliczka.jpg',
  './images/day10-lublin.jpg',
  './images/day11-warszawa.jpg',
  './images/day12-13-warszawa-festival.jpg',
  './images/day14-home.jpg'
];

// Install – cache alt vi trenger for appen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate – rydde gamle cacher hvis vi endrer versjon
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch – cache-first strategi for alle forespørsler
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request);
    })
  );
});

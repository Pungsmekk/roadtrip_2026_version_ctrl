const CACHE_NAME = 'cbp-roadtrip-2026-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',

  // Ikoner
  './images/icons/icon_512.png',
  './images/icons/icon_192.png',
  './images/icons/icon_180.png',
  './images/icons/icon_167.png',
  './images/icons/icon_152.png',

  // Bilder – juster filnavn hvis de avviker i repoet ditt
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

// Install – cache alt vi trenger for å vise appen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate – rydder gamle cacher ved versjonsbytte
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

// Fetch – cache-first: bruk cache om mulig, ellers nett
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});

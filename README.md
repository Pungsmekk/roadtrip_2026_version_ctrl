# Camp Beer Pressure – Roadtrip 2026

Interaktiv roadtrip-planlegger for **Camp Beer Pressure Roadtrip 2026**  
(Nova Rock → Polen → hjem, med alternativ rute via Italia).

Nettsiden er bygget som én statisk HTML-fil med innebygd CSS og JavaScript.  
Ingen backend, ingen rammeverk – kun ren, rask og offline-capable webapp.

---

## 🌍 Live-side

Når GitHub Pages er ferdig med å publisere:

> https://pungsmekk.github.io/roadtrip_2026_version_ctrl/

---

## ✨ Funksjoner

- **Dag-for-dag reiseplan**  
  Klikkbare “accordion”-kort med bilder, kartlenker og kostnadsoverslag.  
  Rute-pillene på toppen hopper direkte til riktig dag.

- **Budsjettseksjon med interaktive piller**  
  Full gjennomgang av kostnader pr. dag fra festival, byer og transport.  
  Egen **grafisk dag-tabell** og detaljert økonomioversikt.

- **Ekstraposter for camp & festival**  
  Sprit, camputstyr, snacks, vann, felleskasse – alt inkludert i nytt oppsett.  
  Realistisk totalbudsjett + slingringsmonn.

- **Alternativ Italia-rute**  
  Egen seksjon med plan B etter Nova Rock.

- **Lettvint navigasjon**  
  Header har “scrollspy” som tracker hvilken seksjon du er i.

- **Offline-støtte (PWA)**  
  Nettstedet caches lokalt via service worker.  
  Last siden én gang → fungerer offline.

- **Touch-optimalisert for mobil**  
  ScrollFix på iPhone og smooth scroll mellom seksjoner.

---

## 📂 Mappestruktur

```text
roadtrip_2026_version_ctrl/
├── index.html               # Hele webappen i én fil: layout, logikk og innhold
├── sw.js                    # Service worker for cache/offline
├── manifest.webmanifest     # PWA-metadata for iOS/Android
└── images/                  # Bilder brukt av siden
    ├── camp-beer-pressure-2026-banner.png
    ├── day1-hamburg.jpg
    ├── day2-praha.jpg
    ├── day3-novarock-arrival.jpg
    ├── day4-7-novarock.jpg
    ├── day8-zakopane.jpg
    ├── day9-krakow-wieliczka.jpg
    ├── day10-lublin.jpg
    ├── day11-warszawa.jpg
    ├── day12-13-warszawa-festival.jpg
    ├── day14-home.jpg
    ├── budget-day-festival.png
    ├── budget-day-city.png
    ├── budget-day-road.png
    └── budget-day-rest.png

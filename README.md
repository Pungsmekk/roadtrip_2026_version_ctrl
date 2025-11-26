# Camp Beer Pressure – Roadtrip 2026

Interaktiv, statisk nettside for å planlegge **Camp Beer Pressure** roadtrip 2026  
(Nova Rock → Polen → hjem, med mulig Italia-alternativ).

<p align="left">
  <a href="https://pungsmekk.github.io/roadtrip_2026_version_ctrl/">
    <img src="https://img.shields.io/badge/status-live-brightgreen?style=flat-square" alt="Status: live" />
  </a>
  <img src="https://img.shields.io/badge/hosting-GitHub%20Pages-181717?logo=github&style=flat-square" alt="Hosting: GitHub Pages" />
  <img src="https://img.shields.io/badge/type-static%20site-blue?style=flat-square" alt="Type: static site" />
  <img src="https://img.shields.io/badge/PWA-offline%20capable-ffb22f?style=flat-square" alt="PWA: offline capable" />
</p>

---

## Hva dette er

- Én enkelt `index.html` med innebygd CSS og JavaScript  
- Dag-for-dag reiseplan med bilder, kartlenker og kostnadsoverslag  
- Budsjettseksjon (inkl. camp-utstyr, sprit, snacks og felleskasse)  
- Alternativ rute via Italia som “plan B”  
- Offline-støtte via service worker (PWA-light)

---

## Filstruktur (kort)

- `index.html` – hele appen (layout, innhold, logikk)  
- `sw.js` – enkel cache for offline  
- `manifest.webmanifest` – PWA-metadata  
- `images/` – alle bilder brukt på siden

---

## Kjøre

- Lokalt:
  - Start en enkel server fra repo-roten slik at service worker kan registreres, f.eks. `npx serve` eller `python -m http.server 4173`.
  - Åpne deretter `http://localhost:4173/index.html` i nettleseren. Åpning direkte fra filsystemet (`file://`) hopper over PWA-funksjonene.
- Prod:
  https://pungsmekk.github.io/roadtrip_2026_version_ctrl/

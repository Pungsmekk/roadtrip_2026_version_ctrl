# Camp Beer Pressure – Roadtrip 2026

Interaktiv, statisk nettside for å planlegge **Camp Beer Pressure Roadtrip 2026**  
(Nova Rock → Polen → hjem, med alternativ rute via Italia).

Nettsiden er bygget som én HTML-fil med innebygd CSS/JS. Ingen backend, ingen rammeverk.

---

## Status & metadata

<p align="left">
  <a href="https://pungsmekk.github.io/roadtrip_2026_version_ctrl/">
    <img src="https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge" alt="Status: live" />
  </a>
  <a href="https://pungsmekk.github.io/roadtrip_2026_version_ctrl/">
    <img src="https://img.shields.io/badge/hosting-GitHub%20Pages-181717?logo=github&style=for-the-badge" alt="Hosting: GitHub Pages" />
  </a>
  <img src="https://img.shields.io/badge/type-static%20site-blue?style=for-the-badge" alt="Type: static site" />
  <img src="https://img.shields.io/badge/PWA-offline%20capable-ffb22f?style=for-the-badge" alt="PWA: offline capable" />
</p>

---

## Innhold

- [1. Live-side](#1-live-side)
- [2. Hovedfunksjonalitet](#2-hovedfunksjonalitet)
- [3. Teknisk oversikt](#3-teknisk-oversikt)
- [4. Prosjektstruktur](#4-prosjektstruktur)
- [5. Utvikling og endringer](#5-utvikling-og-endringer)
- [6. Bygging og deploy (GitHub Pages)](#6-bygging-og-deploy-github-pages)
- [7. PWA og offline-støtte](#7-pwa-og-offline-støtte)
- [8. Videre arbeid](#8-videre-arbeid)

---

## 1. Live-side

Produksjonsurl (GitHub Pages):

> https://pungsmekk.github.io/roadtrip_2026_version_ctrl/

Dette er den versjonen som deles med resten av gjengen.

---

## 2. Hovedfunksjonalitet

### 2.1 Dag-for-dag reiseplan

- “Accordion”-visning per dag med:
  - Dagsbeskrivelse
  - Grovt kostnadsoverslag per person
  - Kartlenker (Google Maps)
  - Daglige bilder
- “Mini-ruteoversikt” med piller øverst som:
  - Hopper direkte til riktig dag
  - Åpner dag-boksen automatisk
  - Scrolles pent under sticky header

### 2.2 Budsjett – total og per dag

- **Overordnet budsjettdel**:
  - Overnatting
  - Drivstoff
  - Mat & drikke
  - Severdigheter
  - Ekstraposter: camp-utstyr, sprit/øl til camp, snacks/vann, felleskasse
  - Oppsummert total + anbefalt slingringsmonn

- **Dag-for-dag-budsjett**:
  - Eget pill-basert UI for økonomi:
    - Dag 1–14, inkludert Nova Rock og Warszawa-dagene
  - Tabellen per dag viser:
    - Kategorier (overnatting, mat/øl, transport, severdigheter)
    - Ca. beløp per person
    - Kort kommentar per linje
  - Oppsummering nederst med typisk kostnivå per type dag
    (reise / by / festival)

### 2.3 Alternativ rute – Italia

Egen seksjon for alternativ rute etter Nova Rock:

- Salzburg, Grossglockner, Dolomittene, ev. Venezia + Gardasjøen/Como
- Presentert som skisse (plan B), ikke låst plan

### 2.4 Navigasjon og UX

- Sticky header med scrollspy:
  - Markerer automatisk hvilken seksjon brukeren er i
- Smooth scrolling ved klikk på menylenker
- Dagskort og budsjett-piller er tilpasset mobilvisning
- Lightbox for dagsbilder (klikk for å zoome)

---

## 3. Teknisk oversikt

- **Språk:** HTML5, CSS3, ren JavaScript (ingen bundler)
- **Struktur:** Alt i `index.html`
- **Caching:** Service Worker (`sw.js`) med cache-first-strategi
- **PWA:** `manifest.webmanifest` + icons
- **Hosting:** GitHub Pages (

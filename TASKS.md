# Foreslåtte oppgaver etter kodelesing

## Rette skrivefeil
- **Problem:** I budsjettseksjonen er "energidrikk" listet sammen med flere miksere (cola/tonic) i flertallsform, men ordet står i entall. Dette fremstår som en skrivefeil i teksten om alkohol-innkjøp. 
- **Forslag til oppgave:** Endre teksten til flertall (f.eks. "energidrikker") slik at opplistingen er grammatisk konsistent. Lokasjon: `index.html`, budsjettkortet for "Alkohol til camp". 

## Fikse funksjonell bug
- **Problem:** Når en dag-boks åpnes settes `maxHeight` til `scrollHeight` én gang, men verdien oppdateres aldri igjen. Ved endret viewport (f.eks. rotasjon på mobil) kan innhold som blir høyere etter resize bli kuttet av fordi `maxHeight` fortsatt står på den gamle verdien. 
- **Forslag til oppgave:** Lytte på `resize`-hendelser og recomputere `maxHeight` for åpne dagkort, eller bruk CSS for å unngå behovet for hardkodet høyde. Lokasjon: `index.html`, accordion-logikken for dagkort. 

## Rette dokumentasjonsavvik
- **Problem:** README sier at man kan åpne `index.html` direkte lokalt, men service worker krever at siden serveres over HTTP(s). Åpning via filsystem vil derfor deaktivere PWA-funksjonalitetene. 
- **Forslag til oppgave:** Oppdatere README med korrekt lokal kjøreinstruks (f.eks. `npx serve` eller tilsvarende) slik at service worker og cache fungerer. Lokasjon: `README.md`, seksjon "Kjøre". 

## Forbedre testdekning
- **Problem:** Det finnes ingen automatisert sjekk som sikrer at mini-rute-pills og neste/forrige-knapper åpner riktig dagkort og aktiverer korrekt "active"-tilstand. Dette er sårbart for regresjoner i den manuelle DOM-logikken. 
- **Forslag til oppgave:** Legg til en enkel browser-test (f.eks. Playwright) som klikker på en pill og en "Neste dag"-knapp og verifiserer at riktig dagkort får `.open` og `.active`. Lokasjon: `index.html`, logikken for pills og neste/forrige-knapper. 

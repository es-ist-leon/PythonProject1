# Zimmerei und Holzbau Braunmiller – Website

Moderne, responsive Website für **Zimmerei und Holzbau Braunmiller** in Gerstetten-Dettingen.
Das Design übernimmt die bestehenden Markenfarben (Rot/Dunkelgrau) und das Logo der bisherigen
Seite unter [holzbau-braunmiller.de](https://holzbau-braunmiller.de).

## Inhalt

Statische Website – kein Build-Schritt, kein Server nötig. Einfach `index.html` im Browser öffnen
oder die Dateien auf einen beliebigen Webspace hochladen.

```
.
├── index.html          # Startseite (One-Page mit allen Sektionen)
├── impressum.html      # Impressum
├── datenschutz.html    # Datenschutzerklärung
├── assets/
│   ├── css/style.css   # gesamtes Styling
│   ├── js/main.js      # Navigation, Scroll-Effekte, Kontaktformular
│   └── img/            # Logo & Bilder
└── README.md
```

## Sektionen der Startseite

- **Hero** – Markenauftritt mit Slogan „Belastbar · Beständig · Flexibel"
- **Kennzahlen** – Eckdaten des Betriebs
- **Über uns** – Vorstellung mit Werdegang von Christian Braunmiller (Timeline)
- **Leistungen** – Dachstühle, Holzrahmenbau, Altbausanierung, Trockenbau,
  Dachflächenfenster, Dachumdeckung, Blechdächer, Carport, Pergola, Holzverkauf
- **Referenzen** – Bildergalerie bisheriger Objekte
- **Karriere** – „Wir suchen Mitarbeiter"
- **Kontakt** – Kontaktdaten + Anfrageformular (öffnet das E-Mail-Programm)

## Technik

- Reines HTML/CSS/JavaScript (Vanilla, keine Abhängigkeiten)
- Mobile-first & vollständig responsive
- Sticky-Navigation mit Burger-Menü auf Mobilgeräten
- Scroll-Reveal-Animationen, `prefers-reduced-motion` wird respektiert
- Schriftarten: Poppins (Überschriften) + Hind (Fließtext) via Google Fonts
- Strukturierte Daten (LocalBusiness) für bessere Auffindbarkeit

## Farben (aus bestehendem Theme)

| Farbe        | Hex       |
|--------------|-----------|
| Rot (Akzent) | `#dd2323` |
| Rot dunkel   | `#b21b1b` / `#851515` |
| Bordeaux     | `#330000` |
| Dunkelgrau   | `#252323` / `#292626` / `#434141` |
| Grau         | `#707070` / `#cbcbcb` |

## Vor der Veröffentlichung prüfen

Im **Impressum** sind die rechtlich erforderlichen Angaben weitgehend vorausgefüllt.
Bitte vor dem Livegang ergänzen/prüfen:

- Umsatzsteuer-Identifikationsnummer (§ 27a UStG) bzw. Steuernummer
- Genaue Bezeichnung der zuständigen Handwerkskammer & Eintragung in die Handwerksrolle

## Hinweis zu den Bildern

Logo und Bilder stammen von der bestehenden Website des Betriebs und liegen lokal unter
`assets/img/`. Sie können jederzeit durch eigene, hochauflösende Aufnahmen ersetzt werden
(gleiche Dateinamen verwenden, dann sind keine Code-Änderungen nötig).

# TUTTOSCOOTER-KNOWLEDGE.md

**Progetto:** TuttoScooter.com
**Tipo di documento:** memoria tecnica del progetto (non protocollo, non regole)
**Data creazione:** 20 agosto 2026
**Ultimo aggiornamento:** 20 agosto 2026 (dati confermati direttamente da William)
**Stato:** in crescita — sezioni 1, 6, 7 verificate; sezioni 2-3-5 parzialmente verificate; sezione 3 (schema.org) esplicitamente NON VERIFICATA, da non trattare come definitiva

**Repository:** Tuttoscooter.com
**Documento:** TUTTOSCOOTER-KNOWLEDGE.md
**Categoria:** Memoria tecnica
**Stato:** In crescita
**Ultima revisione:** 20/08/2026

> Questo documento non contiene regole di processo (quelle sono in
> `AI-AUDIT-PROTOCOL.md`). Contiene **come è fatto il sito**: architettura,
> convenzioni, punti fragili noti. Cresce lentamente, solo quando c'è qualcosa
> di stabile da documentare — non è un log di sessione (quello è il Registro
> modifiche AI, Appendice F del protocollo).

## Stato del documento

Livello di affidabilità delle sezioni:

* ✅ **Verificato** — confermato sul repository o direttamente da William.
* 🟡 **Parzialmente verificato** — confermato solo in parte.
* ⚪ **NON VERIFICATO** — ipotesi o informazione da verificare prima di usarla.

---

## 1. Struttura del progetto

Confermata da William il 20/08/2026 (verifica diretta sul repository):

```text
tuttoscooter/
├── AI/
│   ├── AI-AUDIT-PROTOCOL.md
│   ├── TUTTOSCOOTER-KNOWLEDGE.md   ← questo file
│   └── CHANGELOG-PROTOCOL.md
├── it/
│   └── faq.html
├── en/
│   └── faq.html
├── fr/
│   └── faq.html
├── es/
│   └── faq.html
├── de/
│   └── faq.html
├── assets/
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── favicon/        ← solo le immagini favicon
│       └── (tutte le altre immagini, inclusi i .webp, insieme qui,
│             nessuna sottocartella per tipo o formato)
├── index.html               ← unico file in root, fa da redirect/homepage di default
├── sitemap.xml
└── robots.txt
```

**Punto corretto rispetto a un'ipotesi precedente:** in root esiste **un solo**
`index.html`. Non esistono file `index-it.html`, `index-en.html` ecc. — questa
era un'ipotesi proposta in fase di revisione e **verificata come errata**.

**Da verificare/completare:** struttura interna di `assets/css/` (se esiste una
cartella CSS separata o è tutto in linea/altrove).

---

## 2. Sistema multilingua

* Cinque versioni linguistiche: IT, EN, FR, ES, DE, con file HTML separati per lingua.
* Il testo visibile viene sovrascritto al caricamento pagina da `assets/js/script.js`,
  che legge gli attributi `data-it`, `data-en`, `data-fr`, `data-es`, `data-de`.
* **Punto critico:** modificare solo il testo visibile in HTML non basta — lo script
  lo sovrascrive con il valore dell'attributo `data-*` corrispondente alla lingua
  attiva. Ogni modifica di testo deve toccare *entrambi*.
* Verifica corretta: `Ctrl+U` (sorgente pre-JS). DevTools/Inspect mostra lo stato
  post-JS ed è fuorviante per capire cosa c'è "scritto" nel file.
* Le versioni non italiane non devono contenere riferimenti ad app specifiche
  italiane (es. app IO) — scelta editoriale deliberata, rilevante soprattutto
  nelle FAQ sulla patente di guida.

*(Da completare: dove vive la logica di cambio lingua/localStorage, come sono
collegate le pagine tra loro via hreflang.)*

---

## 3. SEO e dati strutturati

* Ogni pagina ha markup JSON-LD (tipo Product/Offer) da mantenere coerente con
  il contenuto visibile.
* Canonical, hreflang e x-default da verificare ad ogni modifica che tocchi più lingue.
* Ogni cartella lingua ha una pagina `faq.html` dedicata (confermato 20/08/2026).

**NON VERIFICATO — da controllare sul codice reale prima di darlo per fatto:**
quali schema.org sono effettivamente usati in homepage (es. `LocalBusiness`,
`VehicleRentalAgency`), nelle pagine di noleggio, e se `faq.html` usa
`FAQPage`. Non scrivere qui una tabella di schema finché non è stata vista
almeno una volta nel codice — altrimenti si rischia di documentare come fatto
qualcosa di solo plausibile.

---

## 4. Dati legali/aziendali di riferimento

* Ragione sociale: Tuttoscooter di Moncini Stefano
* P.IVA: 01172420117
* REA: SP-106760
* PEC: moncinistefano@pec.it
* Sede: La Spezia, Italia

*(Verificare che questi dati siano coerenti nel footer di tutte le lingue.)*

---

## 5. Conformità legale

* Font self-hosted (non caricati da Google Fonts remoto) — scelta GDPR.
* Cookie banner: nessun pulsante "rifiuta" quando sono usati solo cookie tecnici.
* Disclaimer assicurativo standard: "RC obbligatoria inclusa — copre i danni
  causati a terzi; i danni al mezzo noleggiato sono a carico del conducente."

---

## 6. Errori noti risolti / aperti (riferimento rapido)

Per il dettaglio con date e lezioni, vedere la sezione "Errori Storici / Lezioni
Apprese" in `AI-AUDIT-PROTOCOL.md`. Qui solo l'elenco tecnico sintetico:

| Problema | Stato |
|---|---|
| Cartelle `es/es` duplicate | ✅ Risolto |
| Testo misto IT/FR in alcuni attributi `data-fr` | ✅ Risolto |
| Rimozione card "Sede 2" da tutte le homepage | ✅ Risolto |
| Rimozione label "Sede 1" mantenendo icona 📍 | ✅ Risolto |
| `<p>` con testo visibile svuotato in `it/index.html` (~riga 276) — atteso "Ritiro gratuito presso la nostra sede" — **singolare**, il sito ha oggi **una sola sede** | ✅ Risolto (21/08/2026) — **nota:** al momento della verifica il bug non esisteva più nella forma originale; un tentativo di fix con Trae ha invece introdotto un disallineamento testo/`data-it`, corretto manualmente e verificato V1+V2 |
| Altri eventuali riferimenti a "sedi" al plurale nel sito (residuo del periodo multi-sede) | 🟡 Da verificare — non ancora controllato sistematicamente su tutte le lingue |

**Nota business (20/08/2026):** il sito oggi rappresenta **una sola sede**.
Qualsiasi testo trovato al plurale ("sedi", "nostre sedi") in qualunque lingua
è probabilmente un residuo da correggere, non una scelta editoriale attuale.

---

## 7. Toolchain operativa

* Windows + PowerShell per lavoro locale (letture file con `-Encoding UTF8`
  per evitare mojibake).
* Git: **comandi da terminale** (PowerShell), guidati passo-passo — modalità
  preferita. GitHub Desktop usato una sola volta in passato, poi abbandonato
  a favore del terminale (confermato 20/08/2026). Il primo caricamento del
  sito è avvenuto tramite upload diretto dalla pagina web di GitHub.
* Devin e Trae.ai per modifiche file (alternati in base a quota disponibile).
* GitHub → hosting Namecheap, deploy automatico al push.
* Server locale di verifica: `python -m http.server 8000`, aperto in finestra
  anonima per evitare interferenze di cache.

---

## 8. Glossario del progetto

| Termine | Significato nel progetto |
|---|---|
| **Audit Statico** | Controllo del codice sorgente (HTML, JSON-LD, canonical, ecc.), senza aprire il browser. |
| **Audit Runtime** | Controllo della pagina realmente caricata nel browser, dopo l'esecuzione di JavaScript. |
| **Perimetro** | Insieme esplicito dei file e degli elementi autorizzati alla modifica in un dato intervento. |
| **Checkpoint Git** | Commit locale (`git add . && git commit -m "checkpoint"`) fatto prima di far lavorare un agente AI, per proteggere le modifiche non salvate. |
| **Regressione** | Nuovo problema introdotto involontariamente da una modifica, distinto dal problema originale che si voleva risolvere. |
| **NON VERIFICATO** | Elemento presente ma senza una verifica sufficiente a dichiararlo PASS — non è un giudizio negativo, è un'assenza di prova. |
| **V1 / V2 / V3** | Livelli di verifica: V1 statico (codice), V2 runtime (pagina caricata), V3 funzionale (interazione utente testata). |

---

*(Sezione in crescita — da aggiornare solo quando c'è conoscenza stabile e
verificata da aggiungere, non ad ogni sessione di modifica.)*

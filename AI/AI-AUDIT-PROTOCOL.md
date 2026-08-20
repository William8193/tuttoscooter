# AI-AUDIT-PROTOCOL.md

**Progetto:** TuttoScooter.com
**Versione:** 2.2 (Unificata)
**Data:** 20 agosto 2026
**Stato:** APPROVATA — Documento unico ufficiale
**Elaborato con:** ChatGPT e Claude (revisione congiunta)
**Scopo:** protocollo operativo per modifiche, audit, verifica e pubblicazione del sito TuttoScooter.com

**Repository:** Tuttoscooter.com
**Documento:** AI-AUDIT-PROTOCOL.md
**Categoria:** Protocollo operativo
**Baseline:** 2026
**Stato:** Ufficiale
**Ultima revisione:** 20/08/2026

**Motto del progetto:** *Fidati del processo, non dell'AI.*

## Filosofia del progetto TuttoScooter

Non regole. Tre principi che valgono più di dieci regole.

| Principio | Significato |
|---|---|
| **P1 — Presente ≠ Verificato** | Una dichiarazione, un file o un controllo presenti in un report non costituiscono prova che siano stati realmente verificati. |
| **P2 — Chi modifica non approva** | Ogni modifica significativa richiede un revisore indipendente da chi l'ha eseguita. |
| **P3 — Ogni regola nasce da un bug reale** | Il protocollo cresce solo dall'esperienza verificata sul progetto, mai dalla teoria. |

> **Nota di unificazione (20/08/2026):** in una fase precedente sono circolate due
> stesure entrambe etichettate "v2.2" con regole W1–W10 diverse tra loro. Questo
> file è la **versione unica e definitiva**: usa come base la stesura originale
> (quella con l'audit statico/runtime e la tabella di evidenza) e vi integra le
> Appendici pratiche (prompt pronti all'uso, checklist di pubblicazione, registro
> modifiche). Qualsiasi altra copia del protocollo con contenuti diversi da questo
> file è da considerare superata.

---

# CHANGELOG

| Versione | Contenuto |
|---|---|
| v2.0 | Protocollo base: workflow, prompt, checklist SEO, regole di audit. |
| v2.1 | Lezioni apprese dal progetto: architettura `data-*`, checkpoint Git pre-agente, HTML orfano, PowerShell, verifica report. |
| v2.2 | Revisione congiunta ChatGPT + Claude: distinzione Audit Statico/Runtime, principio "Presente ≠ Verificato", stato NON VERIFICATO, colonna "Prova richiesta", W8 (browser pulito), W10 (log di chiusura sessione), controllo diff Git, principio di nessuna modifica fuori perimetro. |
| v2.2 (Unificata) | Fusione in documento unico: appendici A–F con prompt pronti all'uso, registro modifiche AI, livelli di verifica V1/V2/V3 integrati nella Sezione Audit Statico/Runtime (non come regola W separata, per non gonfiare il numero di regole permanenti). |

### Regola di manutenzione (permanente)

> **Il protocollo si aggiorna solo quando un errore reale del progetto TuttoScooter rivela una lacuna del processo. Niente nuove versioni per aggiungere teoria o migliorie generiche.**

---

# INDICE

| Sezione | Quando usarla |
|---|---|
| 0. Principio fondamentale | Sempre, come riferimento |
| 1. Principi generali | Prima di qualsiasi modifica |
| 2. Ruoli e flusso di lavoro | Procedura completa |
| 3. Checkpoint Git | Passo 0, prima di ogni modifica significativa |
| 4. Analisi preliminare | Prima di modificare |
| W1–W10 | Regole permanenti |
| 5. Audit Statico vs Audit Runtime (con livelli V1/V2/V3) | Distinguere codice e comportamento reale |
| 6. Controllo del diff Git | Prima del commit |
| 7. Audit ChatGPT | Dopo ogni modifica |
| 8. Ciclo di correzione | Dopo un FAIL |
| 9. Audit avversario Claude | Audit finale indipendente |
| 10. Audit finale | Prima del push |
| 11. SEO | Ogni modifica SEO |
| 12. Multilingua | Ogni modifica di contenuto |
| 13. Evidenza e limiti delle verifiche | Sempre |
| 14. Regressioni | Ogni audit significativo |
| 15. Pubblicazione | Prima del push |
| 16. Checklist operativa | Riepilogo rapido |
| 17. Regole di decisione (PASS/FAIL/NON VERIFICATO/N/A) | Sempre |
| 18. Pipeline standard TuttoScooter | Vista d'insieme |
| 19. Principio di proporzionalità | Per calibrare lo sforzo di verifica |
| 20. Filosofia finale | Riferimento |
| 21. Checklist pubblicazione (22 controlli) | Ultimo controllo prima del push |
| Appendice A — Prompt Analisi | Prima di dare lavoro a Devin/TRAE |
| Appendice B — Prompt Esecuzione | Dopo l'approvazione del piano |
| Appendice C — Prompt Audit ChatGPT | Dopo la modifica |
| Appendice D — Prompt Correzione | Dopo un FAIL |
| Appendice E — Prompt Audit Claude | Audit finale/avversario |
| Appendice F — Registro modifiche AI (W10) | Per ogni modifica importante |
| Errori Storici / Lezioni Apprese | Cresce solo da bug reali |
| Regola del Capoprogetto | Nota di chiusura del progetto |

---

# 0. PRINCIPIO FONDAMENTALE

> **Il protocollo non serve a dimostrare che l'AI ha eseguito il prompt. Serve a dimostrare che il risultato finale è corretto.**

Una modifica non è considerata riuscita perché:

* l'AI dichiara di averla effettuata;
* il file contiene il codice atteso;
* il comando è stato eseguito senza errori;
* il commit è andato a buon fine.

La modifica è riuscita solamente quando il risultato è stato **verificato con evidenza sufficiente**.

---

# 1. PRINCIPI GENERALI

## 1.1 Separazione dei ruoli

Il processo TuttoScooter utilizza ruoli distinti:

**AI esecutrice** — può essere utilizzata per modificare il progetto (es. Devin, TRAE, Windsurf, Codex).

**AI revisore** — verifica indipendentemente il lavoro eseguito (es. ChatGPT, Claude).

L'AI che modifica il codice non deve essere considerata automaticamente una prova indipendente della correttezza della propria modifica.

## 1.2 Il risultato prevale sull'intenzione

Non importa quanto fosse corretto il prompt, né quanto l'AI dichiari di aver seguito le istruzioni. Conta esclusivamente il risultato verificabile.

## 1.3 Modifica minima

Ogni intervento deve modificare il minimo numero possibile di elementi necessari per risolvere il problema. Non sono ammesse modifiche "migliorative" non richieste.

Se durante il lavoro viene individuato un problema fuori perimetro:

1. segnalarlo;
2. non modificarlo automaticamente;
3. trattarlo eventualmente con un intervento separato.

## 1.4 Nessuna modifica fuori perimetro

Ogni prompt di esecuzione deve definire chiaramente: file interessati, elementi da modificare, obiettivo, elementi da non modificare.

> **Se trova un problema fuori perimetro, lo segnala. Non lo corregge di propria iniziativa.**

Questa regola vale anche per le AI revisore quando propongono modifiche al protocollo stesso: una nuova regola non richiesta e non motivata da un bug reale non va aggiunta di propria iniziativa.

---

# 2. RUOLI E FLUSSO DI LAVORO

```text
PROBLEMA → ANALISI → CHECKPOINT GIT → PROMPT OPERATIVO → MODIFICA
   → DIFF GIT → VERIFICA LOCALE → AUDIT STATICO → AUDIT RUNTIME
   → CORREZIONE EVENTUALE → CONTROVERIFICA → AUDIT FINALE
   → COMMIT → LOG SESSIONE → PUBBLICAZIONE
```

Una fase non può essere considerata completata sulla sola dichiarazione dell'AI.

---

# 3. CHECKPOINT GIT — PASSO 0

Prima di una modifica significativa deve essere creato un punto di ritorno.

```text
STATO PULITO → CHECKPOINT → MODIFICA → DIFF → TEST
```

```bash
git add .
git commit -m "checkpoint pre-agente"
```

Anche senza push. Il checkpoint è particolarmente importante quando: vengono modificati più file; viene modificata una pagina HTML; vengono toccati SEO/meta tag; vengono modificati JSON-LD; vengono modificati redirect; vengono modificati JavaScript; vengono modificate strutture multilingua; viene modificato CSS globale; viene richiesto un intervento automatico su molte pagine.

---

# 4. ANALISI PRELIMINARE

Prima di modificare il progetto, l'AI deve analizzare: problema dichiarato; file coinvolti; struttura attuale; dipendenze; elementi correlati; rischio di regressione; perimetro minimo della modifica.

## Obbligo

L'AI non deve iniziare modifiche importanti prima di aver chiarito:

> **Cosa è sbagliato? Dove si trova? Cosa deve essere modificato? Cosa deve rimanere invariato?**

---

# W1 — ANALISI PRIMA DELL'ESECUZIONE

Prima di modificare un file, l'AI deve: individuare il file corretto; leggere il contesto necessario; identificare la struttura interessata; verificare eventuali riferimenti correlati; dichiarare cosa intende modificare. Non deve modificare alla cieca.

---

# W2 — PERIMETRO ESPLICITO

Formato minimo:

```text
FILE DA MODIFICARE:
- ...

MODIFICHE RICHIESTE:
- ...

NON MODIFICARE:
- ...

OBIETTIVO:
- ...
```

Se il lavoro richiede modifiche ulteriori, queste devono essere dichiarate prima dell'esecuzione.

---

# W3 — MODIFICA MINIMA

Sono vietati: refactoring non richiesti; riscritture estetiche non richieste; modifiche di testi non pertinenti; modifiche SEO collaterali; ristrutturazioni del codice non necessarie; aggiornamenti di file non coinvolti senza autorizzazione.

---

# W4 — VERIFICA IMMEDIATA

Dopo ogni modifica significativa deve essere verificato almeno: sintassi; struttura HTML; assenza di duplicazioni; correttezza dei percorsi; link; eventuali errori evidenti. La verifica immediata non sostituisce l'audit finale.

---

# W5 — AUDIT INDIPENDENTE

L'AI esecutrice non è sufficiente come unico verificatore. Il revisore deve partire dal requisito, non dalla dichiarazione dell'AI.

Non: *"L'AI dice di aver corretto X."* Ma: *"Verifichiamo se X è effettivamente corretto."*

---

# W6 — CONTROLLO ANTICIPATO E CHECKPOINT

Prima di interventi potenzialmente invasivi: checkpoint Git → definizione del perimetro → modifica → controllo del diff → test. Il checkpoint non è una formalità finale: è una protezione **prima** del rischio.

> **Caso specifico TuttoScooter:** ogni modifica di testo deve aggiornare sia il testo visibile sia tutti gli attributi `data-it`, `data-en`, `data-fr`, `data-es`, `data-de` in `script.js`, che sovrascrive il testo al caricamento della pagina. Verificare sempre con `Ctrl+U` (sorgente), non solo con DevTools (mostra lo stato post-JS).

---

# W7 — CICLO DI CORREZIONE

```text
FAIL → identificazione precisa del problema → correzione mirata → nuova verifica → PASS / FAIL / NON VERIFICATO
```

Non si deve considerare risolto un FAIL solamente perché è stata eseguita una nuova modifica. La correzione deve essere verificata.

---

# W8 — BROWSER PULITO / NO CACHE

Richiesta in particolare per: audit finale; redirect; modifiche SEO; modifiche JavaScript; modifiche CSS significative; problemi apparentemente legati alla cache. Modalità: finestra privata/incognito; cache disabilitata; hard reload; nuova sessione browser. Non deve diventare un rituale obbligatorio per ogni minima modifica.

---

# W9 — EVIDENZA OBBLIGATORIA

> **Un controllo senza evidenza non può essere classificato PASS.**

**Stati ammessi:**

* **PASS** — il requisito è presente, verificato, supportato da evidenza.
* **FAIL** — il requisito è stato verificato e non è conforme.
* **NON VERIFICATO** — l'elemento può essere presente, ma non è stata effettuata una verifica sufficiente.
* **N/A** — il controllo non è applicabile.

> **PRESENTE ≠ VERIFICATO**
>
> ```text
> JSON-LD presente nel file: SÌ
> JSON-LD verificato: NO
> RISULTATO: NON VERIFICATO   (non "PASS")
> ```

### Livelli di verifica (precisazione operativa di W9)

Ogni PASS dovrebbe dichiarare **a che livello** è stato verificato:

| Livello | Significato |
|---|---|
| **V1 — Statico** | Controllo del codice sorgente (HTML, JSON-LD, canonical, ecc.) |
| **V2 — Runtime** | Pagina caricata nel browser, dopo l'esecuzione di JavaScript |
| **V3 — Funzionale** | Test dell'interazione utente (clic, menu, FAQ, immagini, cambio lingua, ecc.) |

Esempi:

* `Canonical: PASS — V1 (riga HTML verificata)`
* `Testo CTA: PASS — V2 (pagina caricata, testo visualizzato corretto dopo JS)`
* `Menu mobile: PASS — V3 (testato cliccando il menu)`

Questo non è una regola a sé: è un modo di scrivere la "prova" richiesta da W9 in modo non ambiguo, specialmente utile su TuttoScooter dove il bug `data-*` ha già dimostrato che un PASS V1 (codice sorgente corretto) non garantisce un PASS V2 (testo effettivamente mostrato in pagina).

---

# W10 — LOG DI CHIUSURA DELLA SESSIONE

Ogni sessione significativa di modifiche deve terminare con un log riassuntivo. Il log di fine sessione costituisce il registro operativo (vedi anche Appendice F per il formato esteso).

**Formato minimo:**

```text
DATA:
AI UTILIZZATE:
OBIETTIVO:
FILE MODIFICATI:
MODIFICHE ESEGUITE:
VERIFICHE EFFETTUATE:
AUDIT:
PROBLEMI RISOLTI:
PROBLEMI RIMASTI:
COMMIT:
STATO FINALE:
- COMPLETATO
- COMPLETATO CON RISERVE
- NON COMPLETATO
- BLOCCATO
```

**Stato finale:**

* **COMPLETATO** — obiettivo raggiunto e verificato.
* **COMPLETATO CON RISERVE** — obiettivo raggiunto, ma rimangono elementi non critici da monitorare.
* **NON COMPLETATO** — l'obiettivo non è stato raggiunto.
* **BLOCCATO** — non è possibile completare il lavoro senza ulteriori informazioni, strumenti o decisioni.

---

# 5. AUDIT STATICO VS AUDIT RUNTIME

## 5.1 Audit Statico

Verifica direttamente i file del progetto: struttura HTML, tag, apertura/chiusura, duplicazioni, attributi, link, immagini, alt, title, meta description; canonical, hreflang, x-default, heading, URL, internal linking; JSON-LD (sintassi, schema, proprietà richieste, coerenza dati); coerenza multilingua IT/EN/FR/ES/DE; file tecnici (sitemap.xml, robots.txt, favicon, asset, redirect).

## 5.2 Audit Runtime

Verifica il comportamento effettivo della pagina caricata: URL finale, redirect, DOM, canonical/hreflang effettivi, JSON-LD effettivamente presente, link funzionanti, immagini caricate, errori JS/console/404, responsive, comportamento in browser pulito, differenze tra sorgente e DOM.

## 5.3 Regola

> **Il controllo statico non sostituisce il controllo runtime quando il requisito riguarda il comportamento della pagina — e viceversa.** Quando necessario, entrambi devono essere eseguiti.

---

# 6. CONTROLLO DEL DIFF GIT

Dopo una modifica AI significativa, prima del commit deve essere controllato il diff, rispondendo a: quali file sono cambiati? quali righe? corrispondono al prompt? esistono modifiche non richieste? file fuori perimetro? duplicazioni introdotte? elementi cancellati accidentalmente?

## Regola STOP

Se il prompt prevedeva 2-3 file e il diff mostra modifiche inattese su molti altri file:

> **STOP.** Prima di procedere occorre identificare la causa.

---

# 7. AUDIT CHATGPT

ChatGPT verifica indipendentemente: requisiti richiesti; correttezza tecnica; struttura; SEO; multilingua; link; JSON-LD; regressioni evidenti; problemi introdotti.

Classificazioni: `PASS / FAIL / NON VERIFICATO / N/A`. Quando possibile: file; riga o elemento; valore prima; valore dopo; prova; motivo del giudizio.

---

# 8. CICLO DI CORREZIONE

```text
AUDIT → FAIL → PROMPT DI CORREZIONE → MODIFICA → DIFF → VERIFICA → NUOVO AUDIT
```

Non si deve assumere che una correzione abbia risolto automaticamente tutti i problemi.

---

# 9. AUDIT AVVERSARIO CLAUDE

Claude svolge una seconda verifica indipendente e possibilmente avversaria, cercando ciò che potrebbe essere sfuggito al primo audit. Attenzione particolare a: falsi PASS; verifiche incomplete; regressioni; modifiche fuori perimetro; incoerenze tra lingue; problemi SEO/runtime; elementi presenti ma non verificati; differenze tra codice e comportamento reale.

L'audit avversario non deve limitarsi a ripetere il primo audit.

---

# 10. AUDIT FINALE

Controllo di chiusura prima del push/pubblicazione.

| # | Controllo | Tipo | Stato | Prova richiesta | Prova ottenuta | Note |
|---|---|---|---|---|---|---|
| 1 | ... | Statico | PASS/FAIL/NON VERIFICATO/N/A | ... | ... | ... |
| 2 | ... | Runtime | PASS/FAIL/NON VERIFICATO/N/A | ... | ... | ... |

## 10.1 Regola di chiusura

Un audit finale non può essere dichiarato COMPLETATO se rimangono: FAIL non risolti; controlli critici NON VERIFICATI; modifiche fuori perimetro non spiegate; regressioni note; diff Git non compreso. I controlli non applicabili possono essere classificati N/A con motivazione.

---

# 11. SEO

Verificare, quando pertinenti: title; meta description; canonical; hreflang; x-default; heading; URL; internal linking; sitemap; robots; structured data; redirect.

## Regola

Non basta verificare che il codice SEO esista. Deve essere: sintatticamente corretto; semanticamente corretto; coerente con la pagina; coerente con le altre lingue; effettivamente presente dove necessario.

---

# 12. MULTILINGUA

Versioni: `IT, EN, FR, ES, DE`.

Verificare che non siano state introdotte: traduzioni errate; link incrociati sbagliati; canonical errati; hreflang errati; riferimenti a cartelle inesistenti; duplicazioni; pagine linguisticamente miste.

Una modifica in una lingua non deve essere automaticamente considerata innocua per le altre.

**Regola editoriale specifica TuttoScooter:** le versioni non italiane non devono contenere riferimenti ad app specifiche italiane (es. IO) — scelta deliberata, da verificare in particolare nelle FAQ sulla patente di guida.

---

# 13. EVIDENZA E LIMITI DELLE VERIFICHE

L'evidenza deve essere proporzionata al controllo:

* **Controllo file** → percorso, contenuto, riga, estratto pertinente.
* **Controllo HTML** → sorgente, elemento, riga.
* **Controllo runtime** → URL, comportamento osservato, DOM, console, screenshot quando utile.
* **Redirect** → URL iniziale, URL finale, comportamento effettivamente osservato.
* **SEO** → elemento HTML effettivo, URL, valore.

---

# 14. REGRESSIONI

Ogni audit significativo deve considerare due domande distinte:

> **A. Il problema originale è stato risolto?**
> **B. La modifica ha introdotto nuovi problemi?**

Controllare, quando pertinenti: pagine collegate; lingue; redirect; menu; CTA; asset; SEO; responsive; JavaScript; structured data.

---

# 15. PUBBLICAZIONE

Prima della pubblicazione devono essere disponibili: checkpoint Git; diff controllato; audit statico; audit runtime quando pertinente; audit indipendente; eventuale audit avversario; audit finale; evidenze; stato finale della sessione; commit identificabile.

La pubblicazione non deve avvenire sulla base della sola dichiarazione: *"Modifica completata."*

---

# 16. CHECKLIST OPERATIVA

**Prima della modifica:** problema identificato · file coinvolti identificati · perimetro definito · elementi da non modificare definiti · rischi identificati · checkpoint Git creato.

**Durante la modifica:** solo file autorizzati modificati · modifica minima applicata · nessun refactoring non richiesto · nessuna modifica fuori perimetro.

**Dopo la modifica:** diff Git controllato · sintassi verificata · struttura verificata · link verificati · SEO verificato quando pertinente · multilingua verificato quando pertinente · runtime verificato quando pertinente · browser pulito utilizzato quando richiesto da W8.

**Audit:** audit statico · audit runtime quando pertinente · audit ChatGPT · correzione eventuali FAIL · controverifica · audit Claude quando previsto · audit finale · evidenza disponibile per ogni PASS.

**Chiusura:** nessun FAIL critico · nessun controllo critico NON VERIFICATO · diff finale coerente · commit effettuato · log sessione prodotto · stato finale assegnato.

---

# 17. REGOLE DI DECISIONE

**PASS** → REQUISITO + VERIFICA + EVIDENZA = PASS

**FAIL** → la verifica dimostra una non conformità.

**NON VERIFICATO** → manca una verifica sufficiente. Non deve essere trasformato in PASS per assunzione.

**N/A** → esclusivamente quando il controllo non è applicabile, con motivazione indicata.

---

# 18. PIPELINE STANDARD TUTTOSCOOTER

```text
1. IDENTIFICAZIONE DEL PROBLEMA
2. ANALISI
3. DEFINIZIONE DEL PERIMETRO
4. CHECKPOINT GIT
5. PROMPT OPERATIVO
6. ESECUZIONE AI
7. DIFF GIT
8. VERIFICA IMMEDIATA
9. AUDIT STATICO
10. AUDIT RUNTIME
11. AUDIT CHATGPT
12. CORREZIONE
13. CONTROVERIFICA
14. AUDIT CLAUDE
15. AUDIT FINALE
16. COMMIT
17. LOG SESSIONE
18. PUBBLICAZIONE
19. MONITORAGGIO
```

Non tutte le modifiche richiedono ogni fase con la stessa profondità.

---

# 19. PRINCIPIO DI PROPORZIONALITÀ

Il protocollo non deve diventare burocrazia. Una modifica minima e isolata può richiedere un controllo ridotto. Una modifica che coinvolge SEO, redirect, struttura multilingua, JavaScript, molte pagine, file globali, configurazione del sito richiede invece un audit più approfondito.

> **Più alto è il rischio della modifica, maggiore deve essere il livello di verifica.**

---

# 20. FILOSOFIA FINALE

1. **L'AI può sbagliare** — anche quando è sicura di aver fatto tutto correttamente.
2. **Il codice non basta** — un elemento presente nel file non significa necessariamente che funzioni.
3. **Un PASS deve essere dimostrabile** — senza evidenza, il risultato è NON VERIFICATO.
4. **Ogni modifica può introdurre regressioni** — per questo servono diff, audit e controverifica.
5. **Il risultato finale conta più del processo** — l'obiettivo è sapere se TuttoScooter.com, dopo la modifica, è corretto, funzionante, coerente e pubblicabile.

---

# REGOLA MADRE

> **NON FIDARTI DELLA DICHIARAZIONE DELL'AI.**
> **VERIFICA IL RISULTATO.**
> **DOCUMENTA LA PROVA.**
> **PUBBLICA SOLO CIÒ CHE È STATO VERIFICATO.**

---
---

# APPENDICE A — PROMPT ANALISI (Devin / TRAE)

**Quando usarlo:** prima di qualsiasi modifica.

```text
Analizza il requisito e il repository.

Individua:
- file coinvolti;
- file collegati;
- lingue coinvolte;
- rischi di regressione;
- controlli da eseguire.

NON modificare alcun file.

Concludi con:
FILE DA MODIFICARE
FILE DA CONTROLLARE
RISCHI
CONTROLLI PREVISTI

Attendi la mia autorizzazione.
```

---

# APPENDICE B — PROMPT ESECUZIONE (Devin / TRAE)

**Quando usarlo:** dopo l'approvazione del piano.

```text
Esegui esclusivamente le modifiche approvate.

Regole:
- modifica solo i file necessari;
- non cambiare formattazione o layout inutilmente;
- aggiorna sia il testo visibile sia tutti gli attributi data-it/en/fr/es/de;
- mantieni coerenti tutte le lingue coinvolte;
- esegui controlli automatici.

Produci un rapporto con:
- file modificati;
- controlli eseguiti;
- errori trovati;
- controlli NON eseguibili.
```

---

# APPENDICE C — PROMPT AUDIT CHATGPT

**Quando usarlo:** dopo la modifica.

```text
Esegui un AUDIT INDIPENDENTE. Non fidarti del lavoro dell'altro agente.

Controlla: HTML, SEO, JSON-LD, link, redirect, multilingua, data-*,
immagini, favicon, CSS, JavaScript, FAQ, regressioni.

Classifica tutto come PASS / FAIL / NON VERIFICATO / N/A.
Ogni PASS deve contenere una PROVA (indica anche il livello: V1/V2/V3).
```

**Tabella obbligatoria:**

| Controllo | Esito | Prova richiesta |
|---|---|---|
| Canonical | PASS/FAIL | Riga HTML verificata |
| Hreflang | PASS/FAIL | Elenco lingue trovate |
| JSON-LD | PASS/FAIL | Blocco verificato |
| data-* | PASS/FAIL | Testo visibile + attributi data-* |
| Tag HTML | PASS/FAIL | Conteggio apertura/chiusura |
| Sitemap | PASS/FAIL | URL verificati |

---

# APPENDICE D — PROMPT CORREZIONE (Devin / TRAE)

**Quando usarlo:** dopo un FAIL.

```text
Correggi esclusivamente i FAIL confermati.

Per ogni FAIL:
- verifica che esista;
- individua la causa;
- applica la correzione minima;
- riesegui il controllo;
- verifica che non esistano regressioni.

Restituisci:
PROBLEMA | CAUSA | FILE | CORREZIONE | TEST POST-CORREZIONE
```

---

# APPENDICE E — PROMPT AUDIT CLAUDE

**Quando usarlo:** audit finale / avversario.

```text
Esegui un AUDIT AVVERSARIALE. Non fidarti né dell'agente né dell'audit precedente.

Cerca errori nascosti e modifiche non richieste.

Controlla: HTML, SEO, JSON-LD, link, immagini, multilingua, data-*,
sitemap, robots, CSS, JavaScript.

Ogni PASS deve indicare la verifica eseguita (livello V1/V2/V3).

Concludi con:
FAIL BLOCCANTI
FAIL NON BLOCCANTI
WARNING
NON VERIFICATO
GIUDIZIO FINALE
```

---

# APPENDICE F — REGISTRO MODIFICHE AI (W10)

Da compilare per ogni modifica importante.

| Campo | Esempio |
|---|---|
| Data | 20/08/2026 |
| AI esecutore | Devin / TRAE |
| AI revisore 1 | ChatGPT |
| AI revisore 2 | Claude |
| Prompt esecuzione | Titolo o descrizione del prompt |
| File modificati | it/index.html, fr/index.html... |
| Commit checkpoint | abc1234 |
| Commit finale | def5678 |
| Audit finale | PASS ChatGPT + PASS Claude |
| Note | Es. bug data-* corretto; nessuna regressione |

---
---

# 21. CHECKLIST PUBBLICAZIONE (22 CONTROLLI)

**Questa checklist è l'ultimo passaggio prima del commit finale e del Push GitHub.**

**HTML**
1. Struttura valida
2. Nessun tag duplicato
3. Conteggio tag verificato

**SEO**
4. Canonical
5. Hreflang
6. X-default
7. Sitemap
8. Robots
9. Meta Title
10. Meta Description

**Link**
11. Interni
12. Esterni
13. Lingue

**JSON-LD**
14. Valido
15. Coerente

**Multilingua**
16. IT
17. EN
18. FR
19. ES
20. DE / data-* aggiornati

**Tecnico**
21. CSS, JavaScript, immagini, favicon — nessun file temporaneo (`fix_*.py`, `update_*.py`)

**Audit**
22. ChatGPT PASS + Claude PASS

---

---
---

# ERRORI STORICI / LEZIONI APPRESE

Questa sezione non è una regola: è un diario. Cresce solo quando un bug reale sul
progetto insegna qualcosa. Ogni riga spiega **perché** una regola esiste, cosa che
tra un anno nessuno ricorderà a memoria.

| Data | Problema reale | Lezione inserita nel protocollo |
|---|---|---|
| Maggio 2026 | Canonical/hreflang errati su alcune lingue. | Checklist SEO multilingua (Sez. 11–12). |
| Giugno 2026 | Cartelle `es/es` duplicate rimaste dopo una riorganizzazione. | Controllo cartelle obsolete (Sez. 5.1, Audit Statico). |
| Agosto 2026 | Testo modificato solo visivamente, non negli attributi `data-*`: lo script lo sovrascriveva al caricamento. | W6 — aggiornare sempre testo visibile + tutti gli attributi `data-it/en/fr/es/de`. |
| Agosto 2026 | Devin ha eseguito `git reset` cancellando modifiche locali non committate. | W6/Sez. 3 — checkpoint Git obbligatorio prima di ogni sessione con agente AI. |
| Agosto 2026 | Un report dichiarava un controllo "confermato" senza che fosse stato realmente verificato. | W9 — Principio P1, nessun PASS senza prova. |
| Agosto 2026 | Due versioni del protocollo, entrambe etichettate "v2.2", con regole W1–W10 diverse tra loro. | Nota di unificazione in apertura del documento + regola: una sola copia ufficiale del protocollo, nessuna riscrittura parallela. |

**Categorie ricorrenti da tenere sotto controllo** (raccolte dall'esperienza, non nuove regole):

* **SEO** — canonical errati, hreflang mancanti, x-default errato.
* **Cartelle** — duplicazioni tipo `es/es`, file rimasti in cartelle eliminate.
* **HTML** — doppio `</body>`/`</html>`, tag non chiusi, sezioni orfane dopo spostamenti.
* **Multilingua (`data-*`)** — verificare sempre con `Ctrl+U`, mai solo con DevTools.
* **Immagini** — percorsi `/assets/...`, WEBP non aggiornati, favicon errate.
* **Redirect** — URL eliminate ma ancora raggiungibili.
* **FAQ** — link errati, CTA tradotte male.

---
---

# REGOLA DEL CAPOPROGETTO (nota di progetto, non regola del protocollo)

> **Nessun documento entra nel repository di TuttoScooter finché non ha superato una peer review di un'altra AI.**

Questa non è una regola W (non riguarda l'esecuzione tecnica sul sito), ma una regola
di governance del progetto: vale per il codice quanto per il protocollo stesso — incluse
le modifiche a questo stesso file.

---

# STATO DEL PROTOCOLLO

* **Versione ufficiale:** v2.2 — **Baseline 2026 (Congelata)**
* **Documento da mantenere:** `AI/AI-AUDIT-PROTOCOL.md` — file unico, nessun'altra copia
* **Regola di manutenzione:** il protocollo si aggiorna solo quando un errore reale del progetto TuttoScooter rivela una lacuna del processo. Nessuna nuova versione per teoria o migliorie generiche. Ogni cambiamento futuro produce un changelog (v2.3, v2.4...) con il motivo; nessuna riscrittura da zero.
* **Documenti collegati (fuori dal protocollo):** `AI/TUTTOSCOOTER-KNOWLEDGE.md` — memoria tecnica del progetto (architettura del sito, non regole di processo).

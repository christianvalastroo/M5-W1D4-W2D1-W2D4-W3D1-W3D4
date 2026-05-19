# 📚 EpiBooks

EpiBooks è una piccola applicazione realizzata con **React + Vite** per consultare un catalogo di libri fantasy, cercare titoli, aprire il dettaglio di un libro e gestirne le recensioni tramite API esterna.

Il progetto usa componenti riutilizzabili, dati caricati da file JSON, routing con **React Router**, tema chiaro/scuro tramite Context API e uno stile basato su **Bootstrap** e **React-Bootstrap**.

## ✨ Funzionalità

- Navbar responsive con brand, link principali, campo di ricerca e pulsante per cambiare tema
- Tema **light/dark** condiviso tra i componenti tramite Context API
- Messaggio di benvenuto con il componente `Welcome`
- Catalogo libri renderizzato in una griglia responsive
- Ricerca dei libri per titolo
- Messaggio di avviso quando la ricerca non produce risultati
- Card libro selezionabili e pulsante per aprire il dettaglio
- Pagina dettaglio con copertina, titolo, categoria, prezzo e codice ASIN
- Area recensioni collegata al libro selezionato
- Recupero delle recensioni da API esterna
- Aggiunta di nuove recensioni con testo e valutazione
- Eliminazione delle recensioni esistenti
- Loader durante il caricamento dei commenti
- Pagina 404 per rotte non esistenti
- Footer stabile in fondo alla pagina quando il contenuto è ridotto
- Test con **Vitest** e **React Testing Library**

## 🧩 Struttura del progetto

```text
src/
├── books/
│   ├── fantasy.json
│   ├── history.json
│   ├── horror.json
│   ├── romance.json
│   └── scifi.json
├── components/
│   ├── AddComment/
│   ├── AllTheBooks/
│   ├── BookDetails/
│   ├── CommentArea/
│   ├── CommentList/
│   ├── LoadingSpinner/
│   ├── MyFooter.jsx/
│   ├── MyNav.jsx/
│   ├── NotFound/
│   ├── SingleBook/
│   ├── SingleComment/
│   └── Welcome/
├── context/
│   └── ThemeHome/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── setupTests.js
```

## 🛠️ Tecnologie usate

- **React 19**
- **Vite**
- **React Router DOM**
- **Bootstrap**
- **React-Bootstrap**
- **Context API**
- **JavaScript**
- **JSON**
- **Vitest**
- **React Testing Library**
- **Strive School Books API**

## 🚀 Come avviare il progetto

Installa le dipendenze:

```bash
npm install
```

Avvia il server di sviluppo:

```bash
npm run dev
```

Apri nel browser l'indirizzo mostrato da Vite, di solito:

```text
http://localhost:5173
```

## 📦 Comandi utili

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

## 🧭 Rotte disponibili

- `/` mostra la home con catalogo, ricerca e lista libri
- `/book/:asin` mostra il dettaglio del libro selezionato e le sue recensioni
- `*` mostra la pagina 404 quando la rotta non esiste

## 📖 Componenti principali

### `App`

Configura il router, mantiene lo stato della ricerca e avvolge l'app nel `ThemeProvider`.

### `ThemeProvider`

Espone `theme` e `toggleTheme` tramite Context API, così navbar, card, dettaglio libro e area commenti possono condividere lo stesso tema.

### `MyNav`

Gestisce la barra di navigazione superiore con brand, link, campo di ricerca e pulsante per passare da tema chiaro a tema scuro. Il testo scritto nell'input viene salvato nello stato di `App` tramite `setSearch`.

### `Welcome`

Mostra un messaggio di benvenuto all'utente.

### `AllTheBooks`

Importa i libri da `fantasy.json`, riceve `search` da `App`, filtra i libri in base al titolo e li renderizza in una griglia responsive.

### `SingleBook`

Mostra ogni libro come card con copertina, titolo, prezzo e link alla pagina di dettaglio. La card può essere selezionata cliccando su di essa.

### `BookDetails`

Legge l'`asin` dalla rotta `/book/:asin`, cerca il libro corrispondente nel file JSON e mostra le informazioni complete. Se il libro non esiste, mostra un messaggio di errore.

### `CommentArea`

Gestisce lo stato delle recensioni del libro selezionato. Recupera i commenti dall'API, mostra il loader durante il caricamento e passa la funzione di aggiornamento a `CommentList` e `AddComment`.

### `CommentList`

Riceve l'array dei commenti e renderizza un componente `SingleComment` per ogni recensione.

### `SingleComment`

Mostra il testo della recensione, il voto e il pulsante per eliminare il commento. Dopo l'eliminazione richiama il refresh dei commenti.

### `AddComment`

Contiene il form per inserire una nuova recensione. Permette di scrivere il commento, scegliere un voto da 1 a 5 stelle e inviare i dati all'API. Dopo il salvataggio aggiorna la lista e svuota il form.

### `NotFound`

Mostra una pagina 404 con pulsante per tornare alla home.

## 🌐 API commenti

L'app usa le API di Strive School per leggere, creare ed eliminare commenti:

- `GET /api/comments/:asin` recupera le recensioni di un libro
- `POST /api/comments` aggiunge una nuova recensione
- `DELETE /api/comments/:commentId` elimina una recensione

Le richieste usano l'header `Authorization` con token `Bearer`.

> Nota: in un progetto reale il token non dovrebbe essere scritto direttamente nei componenti. Sarebbe meglio leggerlo da variabili d'ambiente, ad esempio tramite un file `.env` escluso da Git.

## 🧪 Test

Il progetto include test per alcuni componenti principali, tra cui navbar, welcome, lista libri, card libro, area commenti e pagina 404.

Per eseguirli:

```bash
npm run test
```

## 🎯 Obiettivo didattico

L'obiettivo è costruire una piccola interfaccia React suddivisa in componenti, imparando a:

- organizzare il codice in modo modulare
- passare dati tramite `props`
- gestire lo stato con `useState`
- condividere stato globale con Context API
- usare file JSON come sorgente dati
- creare layout responsive con React-Bootstrap
- filtrare una lista in base all'input dell'utente
- configurare rotte con React Router
- leggere parametri dinamici dalla URL
- usare `useEffect` e lifecycle methods per caricare dati
- collegare l'app a un'API esterna con `fetch`
- gestire operazioni `GET`, `POST` e `DELETE`
- scrivere test di base con Vitest e React Testing Library

## 🔍 Stato attuale

Al momento l'app:

- mostra navbar, welcome e footer
- visualizza i libri fantasy in una griglia responsive
- permette di cercare un libro per titolo dalla navbar
- mostra un alert se non ci sono risultati
- permette di selezionare una card
- permette di aprire il dettaglio del libro
- gestisce tema chiaro e scuro
- mostra, aggiunge ed elimina recensioni
- gestisce il caricamento dei commenti con uno spinner
- mostra una pagina 404 per rotte non valide
- include una prima suite di test automatizzati

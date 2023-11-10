/* Esercizio
-Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.
-Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
-Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags(array di stringhe)
-Creiamo poi una rotta / posts che ritorni tramite content negotiation la lista dei post, da un array locale.Ritorniamo i dati sotto forma di json e html stampando una semplice ul.
-Le rotte relative ai post dovranno chiamare la funzione relativa dal controller dedicato controllers / posts.js
-Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
-Testare le immagini scrivendo manualmente il link nel browser.
  Bonus
-Nel stampare la ul in html, si potrebbe inserire anche un tag img, la descrizione e la lista dei tag
-Spostiamo l’array dei post in un file separato da importare poi dentro il controller
 */



const express = require("express");
const dotenv = require("dotenv");
const postsController = require("./controllers/posts");
const homeController = require("./controllers/home");

dotenv.config();

// istanza di express
const app = express();

// configuro i file statici
app.use(express.static("public"));

// Definiamo le rotte
app.get("/", homeController.index);
app.get("/about", homeController.about);
app.get("/contatti", homeController.contacts);

app.get("/posts", postsController.index)

// Avviamo il server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

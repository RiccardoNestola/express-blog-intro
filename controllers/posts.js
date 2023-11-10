const { posts } = require("../db/posts");
const fs = require("fs");
const path = require("path");

/* let posts = [
  {
    titolo: "Il mio primo post",
    contenuto: "Questo è il contenuto del mio primo post.",
    immagine: "url_immagine_1.jpg",
    tags: ["viaggi", "avventura", "natura"]
  },
  {
    titolo: "Ricette facili e veloci",
    contenuto: "Scopri come cucinare piatti deliziosi in poco tempo.",
    immagine: "url_immagine_2.jpg",
    tags: ["cucina", "ricette", "salute"]
  },
  {
    titolo: "Consigli di giardinaggio",
    contenuto: "Guida essenziale per mantenere il tuo giardino fiorito.",
    immagine: "url_immagine_3.jpg",
    tags: ["giardinaggio", "piante", "fiori"]
  },
  {
    titolo: "Viaggio in Giappone",
    contenuto: "Il mio emozionante viaggio attraverso il Giappone.",
    immagine: "url_immagine_4.jpg",
    tags: ["viaggi", "Giappone", "cultura"]
  },
  {
    titolo: "Tecnologie emergenti nel 2023",
    contenuto: "Esploriamo le tecnologie che cambieranno il nostro futuro.",
    immagine: "url_immagine_5.jpg",
    tags: ["tecnologia", "innovazione", "futuro"]
  }
]; */

function index(req, res) {
    res.format({
      'text/html': function () {
        let htmlContent = fs.readFileSync(path.resolve(__dirname, "../posts.html"), "utf-8");
        let headContent = fs.readFileSync(path.resolve(__dirname, "../head.html"), "utf-8");
        htmlContent = htmlContent.replace("@head", headContent);
   /*      res.type("html").send(htmlContent); */
        
        let htmlOutput = '<ul>';
        posts.forEach(post => {
          htmlOutput += `<li><h3>${post.titolo}</h3><p>${post.contenuto}</p><img src="${post.immagine}" alt=""><p>Tags: ${post.tags.join(', ')}</p></li>`;
        });
        htmlOutput += '</ul>';
        htmlContent = htmlContent.replace("@posts", htmlOutput);
        res.send(htmlContent);
        
      },
      'application/json': function () {
        res.json(posts);
      },
      'default': function () {
        res.status(406).send('Not Acceptable');
      }
    });
}

module.exports = {
  index,
}
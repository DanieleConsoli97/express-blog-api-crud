//NOTE - importiamo il modulo express da node_mopdules
const express = require("express")
//NOTE - inizzializziamo express
const app = express()
//NOTE -  porta del server
port=3000
//NOTE - importiamo le rotte dal file esterno
const postsRouter = require('./routers/posts');
//NOTE - Importiamo il middleware not found
const notFound = require ("./middleware/notFound")
//NOTE - Importiamo il middleware error handler
const errorsHandler = require("./middleware/errorsHandler")


app.use(errorsHandler)
//NOTE - con questa sintassi attiviamo la decodifica (in questo caso) dei file json passati tramite richiesta del body senza di questa viene restiruito undefind
//NOTE - attenzione alla posizione dove vai ad inserirla perchè se sta sotto alle routers non viene letta e continua a darti undefind
//NOTE - con app use abbiamo uno scope globale anche per i file esterni all'app
app.use(express.json())
//NOTE - abilitiamo la catella public in modo tale da utilizzare i dati al suo interno per esempio se seguiamo il path http://localhost:3000/public/imgs/posts/ciambellone.jpeg ed effetuiomo una richiesta get visualizza l'immagine
app.use("/public",express.static("public"))
//NOTE - ablitiamo la rotta per accedere alle rotte
app.use('/posts', postsRouter);
//NOTE - sempre attenzione alla posizione se lo metti sopra all'applicativo si blocca tutto darà sempre il messaggio
app.use(notFound);
// questo codice avvia un server web e lo mette in ascolto su una porta specifica, pronta a gestire le richieste HTTP e stampa in console Example app listening ON http://localhost:${port}
app.listen(port, () => {
    console.log(`Example app listening ON http://localhost:${port}`)
})
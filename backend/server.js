const express = require("express")
const cors = require("cors")
const { movies } = require("./dataMoovies.js")

const app = express()

app.use(cors())

const port = 8088

app.get("/moviename", (req, res) => {

    res.json(movies)
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})
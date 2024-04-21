const express = require('express');
const router = express.Router();
const posts = require('../model/posts')

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getALL()));
});

router.post("/new", (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    posts.newPost(titulo, descricao);
    res.send("Post adicionado");
});

module.exports = router;
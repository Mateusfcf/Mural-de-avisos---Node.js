const PORT = 3000;
const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api.js');

app.use(express.json());
app.use("/api", apiRouter);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => { console.log("Servidor rodando na porta:", PORT) });
const express = require("express");
const route = express.Router();
const homeController = require("./src/controller/homeController");
const contatoController = require("./src/controller/contatoController");

// rota da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas para contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;

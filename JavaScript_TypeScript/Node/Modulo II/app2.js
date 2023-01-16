// const multiplicacao = require("./mod");
const Cachorro = require("./mod2");

// console.log(multiplicacao(2, 2));

const racaDeCachorro = new Cachorro("Fox Paulistinha");
racaDeCachorro.latir();
racaDeCachorro.correr();
racaDeCachorro.pular();

const { log } = console;

log();
log(__filename);
log(__dirname);

const path = require("path");
log(path.resolve(__dirname));

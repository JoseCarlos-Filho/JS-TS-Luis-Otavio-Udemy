const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost");
  console.log("servidor executando na porta 3000");
});

//  CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET   PUT     DELETE

//  http://meusite.com/ <- GET -> Entregue a página / Home
//  http://meusite.com/sobre <- GET -> Entregue a página /Sobre
//  http://meusite.com/contato <- GET -> Entregue a página /Contato
// Rota /testes/ recebe parâmetros, no exemplo:
//  id do usuário segue com ? para ficar opcional
//  sem o ? a rota /testes/ fica inacessível.
// /profile/3
//  /prfile/?chave1=valor1&chave2=valor2&chave3=valor3
// app.get("/testes/:idUsuario?/:parametros?", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.send(req.query.facebookprofile);
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send(`O que você enviou foi: ${req.body.nome}`);
//   // res.send("Recebi o formulário");
// });

// app.get("/contato", (req, res) => {
//   res.send("Obrigado por fazer este contato!!!");
// });

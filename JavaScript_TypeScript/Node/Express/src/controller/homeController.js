// const HomeModel = require("../models/HomeModel");

// HomeModel.create({
//   titulo: "Outra coisa de teste",
//   descricao: "Outra descricao de teste",
// })
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  console.log("Inicio");
  res.render("index", {
    titulo: "Este é o título da página",
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(`Ei, sou sua nova rota de POST.`);
  console.log("rota post");
  res.send(req.body);
  return;
};

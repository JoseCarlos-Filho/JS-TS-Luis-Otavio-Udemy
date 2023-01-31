exports.paginaInicial = (req, res) => {
  console.log("Inicio");
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(`Ei, sou sua nova rota de POST.`);
  console.log("rota post");
  res.send(req.body);
  return;
};

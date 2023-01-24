exports.paginaInicial = (req, res) => {
  res.send(`
      <form action='/' method='post'>
      Nome do cliente: <input type='text' name='nome'><br>
      e-mail: <input type='text' name='email'>
      <button>Enviar</button>
      </form>
    `);
};

exports.trataPost = (req, res) => {
  res.send(`Ei, sou sua nova rota de POST.`);
};

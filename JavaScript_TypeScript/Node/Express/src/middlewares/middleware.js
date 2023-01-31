const { log } = console;
module.exports = (req, res, next) => {
  if (req.body.nome) {
    log();
    log(`Teste Post realizado com dados: ${req.body.cliente}`);
    log();
  }

  next();
};

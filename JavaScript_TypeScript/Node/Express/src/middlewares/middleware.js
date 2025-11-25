const { log } = console;
exports.middlewareGlobal = (req, res, next) => {
  if (req.body.nome) {
    log();
    log(`Teste Post realizado com dados: ${req.body.cliente}`);
    log();
  }

  next();
};

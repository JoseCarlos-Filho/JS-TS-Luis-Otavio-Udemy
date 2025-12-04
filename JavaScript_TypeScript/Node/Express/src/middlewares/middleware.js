const { log } = console;
exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = "Este é o valor da variável local.";
  if (req.body.nome) {
    log();
    log(`Teste Post realizado com dados: ${req.body.cliente}`);
    log();
  }

  next();
};

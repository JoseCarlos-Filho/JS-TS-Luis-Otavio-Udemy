const { log } = console;
module.exports = (req, res, next) => {
  if (req.body.nome) {
    log();
    log(`Post realizado com dados: ${req.body.cliente}`);
    log();
  }

  next();
};

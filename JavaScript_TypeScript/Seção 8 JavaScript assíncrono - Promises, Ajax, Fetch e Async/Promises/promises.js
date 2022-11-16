function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("NO STRING");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Conexão com BD", aleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da Base", aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(123, aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Exibir dados na tela.");
  })
  .catch((e) => {
    console.log("ERRO: ", e);
  });
// esperaAi("Opa 1", aleatorio(1, 3));
// esperaAi("Opa 2", aleatorio(1, 3));
// esperaAi("Opa 3", aleatorio(1, 3));

try {
  console.log(naoExisto);
} catch (e) {
  console.log("naoExisto não existe");
  // console.log(e); // Nunca mostre o stack trace do erro para o usuário
}

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("x e y precisam ser números.");
  }
  return x + y;
}

// Se o bloco try não tiver erro o mesmo será executado
// Caso contrário o bloco catch é executado mostrando a mensagem de erro tratada para o usuário.
try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (e) {
  // console.log(e);
  console.log("Colocar um erro mais amigável pro usuário");
}

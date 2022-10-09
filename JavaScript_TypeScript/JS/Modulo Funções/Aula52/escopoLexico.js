/*
 * Neste exemplo a vaviavel nome esta fora do escopo da função, assim que executado
 * a função procura a variavel nome dentro do seu escopo e nos seus vizinhos podendo
 * chegar no escopo global.
 * Note que tem uma variavel nome dentro do escopo da função que esta comentado
 * quando este é executado o resultado da função é a variavel mais próxima ou dentro do escopo
 * da função em questão.
 * Quanto declarado dentro da função usaFalaNome() o resultado será "Jose"
 * porque ele está executando a função sem alterar o escopo léxico respeitando
 * o que esta de fato dentro da função que está sendo executado e seus vizinhos.
 */
const nome = "Jose";

function falaNome() {
  //   const nome = "Carlos";
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Carlos";
  falaNome();
}

usaFalaNome();

/*
 * Closure
 */

function returnFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = returnFuncao("Jose");
const funcao1 = returnFuncao("Maria");
console.dir(funcao);
console.dir(funcao1);

console.log(funcao(), funcao1());

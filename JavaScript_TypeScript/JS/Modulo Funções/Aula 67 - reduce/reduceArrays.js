// Reduce -> Reduz o array em unico elemento

// Some todos os números (reduce)
// Retorne um array com os pares (Filter), isto é possivel fazer com reduce.
// Retorne um array com o dobro dos valores (map), isto é possivel fazer com reduce.

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

/* -------------------------- 1 FORMA DE RESOLVER ---------------------- */
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor; //soma todos os numeros do array
  console.log(acumulador, valor);
  console.log(acumulador, valor, indice, array);
  /*Inicializa o parametro acumulador com valor 0.*/
  console.log(total); // esta é a função do array reduzir um array para um unico elemento.
}, 0); // Valor de inicialização do parâmentro acumulador: obs - é opcional.

/* -------------------------- 1 FORMA DE RESOLVER ---------------------- */

/* -------------------------- 2 Resolvendo com chamada de funções ---------------------- */
function somaTotal(numArray) {
  const total = numArray.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    // console.log(acumulador);
    return acumulador;
  }, 0);
  // console.log(acumulador);
  return total;
}

console.log(somaTotal(numeros));

/* -------------------------- 2 FORMA DE RESOLVER ---------------------- */

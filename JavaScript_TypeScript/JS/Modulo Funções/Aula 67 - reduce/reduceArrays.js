// Reduce -> Reduz o array em unico elemento

// Some todos os números (reduce)
// Retorne um array com os pares (Filter), isto é possivel fazer com reduce.
// Retorne um array com o dobro dos valores (map), isto é possivel fazer com reduce.

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

/* -------------------------- 1 FORMA DE RESOLVER ---------------------- */
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   acumulador += valor; //soma todos os numeros do array
//   console.log(acumulador, valor);
//   // console.log(acumulador, valor, indice, array);
//   return acumulador;
// }, 0);
// // esta é a função do array reduzir um array para um unico elemento.
// // Valor de inicialização do parâmentro acumulador: obs - é opcional.
// console.log(total);
/* -------------------------- 1 FORMA DE RESOLVER ---------------------- */

/* ---- 2 Resolvendo com chamada de funções soma total dos valores do Array ---- */
function somaTotal(numArray) {
  const total = numArray.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    // console.log(acumulador);
    return acumulador;
  }, 0);
  // console.log(acumulador);
  return total;
}

console.log(`Soma total dos valores no array : ${somaTotal(numeros)}`);

/* ----------> 2 Resolvendo com funções Numero pares do Arrays <----------- */

function numPares(parArray) {
  const par = parArray.reduce(function (acumulador, valor, indice, array) {
    // primeira condição numeros impares e segunda numeros pares
    if (valor % 2 !== 0) acumulador.push(valor);
    // if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
  }, []); // inicializando com Array vazio.
  return par;
}

console.log(numPares(numeros));

/* ----------> 2 Resolvendo com funções Numeros em dobro do array <----------- */
function numDobro(dobroArray) {
  const dobro = dobroArray.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
  }, []);
  return dobro;
}

console.log(numDobro(numeros));

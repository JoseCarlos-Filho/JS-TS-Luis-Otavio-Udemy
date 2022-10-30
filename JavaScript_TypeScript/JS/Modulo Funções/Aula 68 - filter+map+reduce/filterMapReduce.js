// Retorne a soma do dobro de todos os pares
//  -> Filtrar Pares
// -> Dobrar os valores
// -> Reduzir (soma tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosPares = numeros
//   .filter(function (valor) {
//     return valor % 2 === 0;
//   })
//   .map(function (valor) {
//     return valor * 2;
//   })
//   .reduce(function (acumulador, valor) {
//     return (acumulador += valor);
//   });

// CONVERTENDO EM ARROW FUNCTIONS ****
const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor));

// Primeiro resultado da função foi um Array
// com os numero pares. [ 50,   80, 2,  8, 22 ]
// Array pares c/ dobro [ 100, 160, 4, 16, 44 ]
// Soma total do Dobro de todos os pares 324.
console.log(numerosPares);

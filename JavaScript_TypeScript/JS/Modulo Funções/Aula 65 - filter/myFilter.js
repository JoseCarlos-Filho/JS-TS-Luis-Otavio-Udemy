// Filter, map, reduce
//  Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor, indice, array) => {
  console.log(
    `Valor do array: ${valor}, indíce: ${indice}, Array completo: ${array}`
  );
  return valor > 10;
});

console.log(numerosFiltrados);

/* função de filtragem de valor maior que 10
*  Não é a melhor solução.
*  Boa práticas de funções e Arrow function são melhores
*  -----------------------------------------------------

function filterIdade(array) {
  const ageMaior = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) ageMaior.push(array[i]);
  }
  return ageMaior;
}

console.log(filterIdade(numeros));

*  ------------------------------------- */

// utilizando o filter no array
// const filtroIdade = numeros.filter(function (num) {
//   return num > 10;
// });

// console.log(filtroIdade);

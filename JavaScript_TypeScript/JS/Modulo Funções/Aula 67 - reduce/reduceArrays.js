// Reduce -> Reduz o array em unico elemento

// Some todos os números (reduce)
// Retorne um array com os pares (Filter), isto é possivel fazer com reduce.
// Retorne um array com o dobro dos valores (map), isto é possivel fazer com reduce.

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  console.log(acumulador, valor, indice, array);
});
// console.log(total);

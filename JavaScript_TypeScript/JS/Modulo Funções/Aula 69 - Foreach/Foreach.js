const array1 = [100, 200, 300];
//  400, 500, 600, 700, 800, 900];

// for (let valor of array1) {
//   console.log(valor);
// }

// array1.forEach(function (valor, indice, array) {
//   console.log(valor, indice, array);
// });

// Arrow function
let total = 0;
array1.forEach((valor) => {
  total += valor;
});
console.log(total);

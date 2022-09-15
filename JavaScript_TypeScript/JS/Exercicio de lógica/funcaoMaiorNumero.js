// function maiorNumero(num1, num2) {
//   if (num1 > num2) {
//     console.log("num1 é o maior numero :", num1);
//   } else {
//     console.log("num2 é o maior numero :", num2);
//   }
// }

// maiorNumero(10, 50);

// solução do professor
// function max(x, y) {
//   if (x > y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// console.log(max(1, 2));

// Operação em uma linha
// function max(x, y) {
//   if (x > y) return x;
//   return y;
// }

// console.log(max(1, 2));

// Operação ternário
// function max(x, y) {
//   return x > y ? x : y; // condição ternária
// }

// console.log(max(1, 2));

// Utilizando Arrow function
const max = (x, y) => {
  return x > y ? x : y; // condição ternária
};

console.log(max(10, 20));

// Arrow function de uma linha
const max2 = (x, y) => (x > y ? x : y);
console.log(max2(5, 3));

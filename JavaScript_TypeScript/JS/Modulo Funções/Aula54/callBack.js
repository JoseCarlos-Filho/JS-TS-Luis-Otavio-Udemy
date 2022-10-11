/*
 * Funções de Callback - função que é executada após o termino de outra.
 * respeitando a regra conforme o tempo de resposta da web( simulado pela função
 * setTimeout()).
 */

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(() => {
    console.log("f1");
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(() => {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(() => {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

// Esta forma de chamar o callback funciona porem não é uma boa prática
// por conta da quantidade n de funções que podem ser aninhadas uma dentro da outra
// tornando o código extenso "parecendo uma arvore de natal".
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("Executando callback!");
//     });
//   });
// });

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("Executando callback!");
}

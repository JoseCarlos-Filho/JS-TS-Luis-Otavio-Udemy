// document.addEventListener("click", function () {
//   document.body.style.backgroundColor = "cyan";
// });

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa("Jose", "Carlos");
const p2 = {
  nome: "Elaine",
  sobrenome: "Tiemi",
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const opa = falaFrase("Oxe");
const resto = opa("estou codando!");
console.log(resto);

function criaMultiplicador(multiplicador) {
  // multiplicador esta no escopo desta função
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(6));
console.log(duplica(10));

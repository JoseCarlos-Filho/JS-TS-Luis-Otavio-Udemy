// Declaração de função (Function Hoisting)
// Function Hoisting: A enginee do js eleva todas as funções mesmo se a função for chamada antes ou depois.
function falaOi() {
  console.log("Aoba");
}

falaOi();

// First-class objects (Objetos de primeira classe)
// As funções se comportam como dados.
// Exemplo:
const souUmDado = function () {
  console.log("Sou um dado.");
};
// souUmDado();

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo:");
  funcao();
}

executaFuncao(souUmDado);

// Arrow Function declaração de funções do ECMA2015
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

// Dentro de um objeto pode ter uma função.
const obj = {
  falar: function () {
    console.log("Estou falando...");
  },
};

obj.falar();

// Outro maneira de utiliza funções que estão dentro do objeto.
const objeto = {
  falar() {
    console.log("Tambem estou falando...");
  },
};

objeto.falar();

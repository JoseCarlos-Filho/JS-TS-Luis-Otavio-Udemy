/* 
    Primeira forma de solucionar utilizando Factory Function
    com a criação de um objeto dentro de criaPessoa.
*/

// function criaPessoa(nome, sobrenome) {
//   const pessoaPrototype = {
//     falar() {
//       console.log(`${this.nome} está falando.`);
//     },
//     comer() {
//       console.log(`${this.nome} está comendo.`);
//     },
//     beber() {
//       console.log(`${this.nome} está bebendo.`);
//     },
//   };

//   return Object.create(pessoaPrototype, {
//     nome: { value: nome },
//     sobrenome: { value: sobrenome },
//   });
// }

// const p1 = criaPessoa("José", "Carlos");
// console.log(p1);

/* 
    Segunda forma de solucionar utilizando Factory Function
    desaclopando os metodos do objeto criaPessoa, o mesmo sendo chamado
    no prototype do Objeto criaPessoa 
*/

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

// primeira forma de resolver utilizando o operador spread para adicionar os objetos
// falar, comer, beber dentro do prototype do objeto criaPessoa.
// const pessoaPrototype = { ...falar, ...comer, ...beber };

// segunda forma de resolver utilizando o Object.assign para adicionar os objetos
// falar, comer, beber dentro do prototype do objeto criaPessoa.
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("José", "Carlos");
const p2 = criaPessoa("Elaine", "Tiemi");
console.log(p1);

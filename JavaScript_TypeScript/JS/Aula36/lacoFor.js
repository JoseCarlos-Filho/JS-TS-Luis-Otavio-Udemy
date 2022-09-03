const frutas = ["Pera", "Maça", "Uva"];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// For in -> lê os indices de um array ou chaves de um objeto
for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: "José",
  sobrenome: "Carlos",
  idade: 37,
};

for (let index in pessoa) {
  console.log(index);
}

// formas de acessar um objeto no array
console.log(pessoa.nome);
console.log(pessoa["nome"]);

// acessando uma propriedade de forma dinâmica em um array de objetos.
const chaves = "nome";
console.log(chaves);

// acessando o indice e os dados do array de objetos
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// Map : altera os valores de um array, retorna o array, porem com valores alterados.
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// Arrow function
// const numerosEmDobro = numeros.map((valor) => `Valor do array: ${valor * 2}`);
// console.log(numerosEmDobro);

// const numerosEmDobro = numeros.map(function (valor) {
//   return `Valor do array: ${valor * 2}`;
// });

// console.log(numerosEmDobro);

/*------------------- PARA CADA ELEMENTRO ------------------*/
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const stringNomePessoa = pessoas.map(function (objPessoa) {
  //   console.log(objPessoa.nome);
  return objPessoa.nome;
});
console.log("Objeto atlterado somente com a string de nomes :");
console.log(stringNomePessoa);
console.log("");
const removeChaveNome = pessoas.map(function (objPessoa) {
  //   delete objPessoa.nome;
  return { idade: objPessoa.idade };
  //   console.log(objPessoa);
  // Ou esta forma return { idade: obj.idade};
});
console.log("Objeto sem o Id nome :");
console.log(removeChaveNome);
console.log("");

const addChaveId = pessoas.map(function (objPessoa, indice) {
  //   criando novo objeto para que o original não seja alterado.
  const newObj = { ...objPessoa };
  newObj.id = (indice + 1) * 10;
  return newObj;
  //   console.log(objPessoa);
});
console.log("Objeto atlterado com Id :");
console.log(addChaveId);
console.log("");
// Muito cuidado!!! Aqui o objeto original está sendo alterado
// para que isso não ocarro devesse declarar um novo objeto dentro da função de forma
// que o original não seja alterado.
// Veja o exmplo acima ao chamar no console.log(addChaveId).
console.log("Objeto Original: Pessoas");
console.log(pessoas);

/*-------- Arrow functions da solução acima ----------*/

// const stringNomePessoa = pessoas.map((objPessoa) => objPessoa.nome);
// console.log(stringNomePessoa);

// const removeChaveNome = pessoas.map((objPessoa) => ({
//   idade: objPessoa.idade,
// }));
// console.log(removeChaveNome);

// const addChaveId = pessoas.map((objPessoa, indice) => {
//   objPessoa.id = (indice + 1) * 10;
//   return objPessoa;
// });
// console.log(addChaveId);

const pessoas = [
  { id: 3, nome: "José" },
  { id: 2, nome: "Elaine" },
  { id: 1, nome: "Vitória" },
];

/*

    Nesta forma de resolução por padrão o javascript trabalha com numeros
    de forma crescente, repare que no array de objetos a ordem é decrescente,
    se você prefere manter desta forma precisa utilizar de outra solução abaixo.

*/
// const newPearson = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   newPearson[id] = { ...pessoa };
// }

// console.log(newPearson);

/*

    O Map objeto contém pares de valores-chave e lembra a ordem de inserção original das 
    chaves. 
    Qualquer valor (objetos e valores primitivos ) pode ser usado como chave ou valor.
    Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    Possui metodo set() para adicionar novos id, valores ou setar a configuração do mesmo
    no caso manter a ordem decrescente do array de objetos.
    Possui metodo get() para ver os dados de um array de objetos passando id ou valores depende do caso.

*/

const newPearson = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  newPearson.set(id, { ...pessoa });
}

console.log(newPearson);
console.log("");
console.log(newPearson.get(2));
console.log("");

for (const pessoa of newPearson) {
  console.log(pessoa);
}

console.log("");

// desestruturação do array de objetos
for (const [identificador, { id, nome }] of newPearson) {
  console.log(identificador, id, nome);
}

console.log("");

// exibindo somente as chaves
for (const pessoa of newPearson.keys()) {
  console.log(pessoa);
}

console.log("");

// exibindo somente os valores.
for (const pessoa of newPearson.values()) {
  console.log(pessoa);
}

console.log("");

// deletando uma chave.
newPearson.delete(2);
console.log(newPearson);

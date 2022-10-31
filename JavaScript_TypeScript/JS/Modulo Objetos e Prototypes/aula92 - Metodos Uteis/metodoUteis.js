/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

JÁ VIMOS : 
Object.Keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// const produto = { nome: "Caneca", preco: 1.8 };
// const outraCoisa = {
//   ...produto,
//   material: "porcelana", // é possivel criar novas chaves para a propriedade copiada.
//   id: "1",
// }; // fazendo uma cópia de produto para entrar novos valores. operador: spread.

// outraCoisa.nome = "Garfo";
// outraCoisa.preco = 2.5;
// console.log(produto);
// console.log(outraCoisa);

const produtoA = { nome: "Caneca", preco: 1.2 };
const produtoB = Object.assign({}, produtoA, { matreial: "Porcelana" });

produtoB.nome = "Prato";
produtoB.preco = 4.0;
console.log(produtoA);
console.log(produtoB);
console.log(Object.keys(produtoA));
Object.freeze(produtoB);
produtoB.nome = "Outra coisa";
console.log(produtoB);

// Object.getOwnPropertyDescriptor(o, 'prop')
// Retorna as propriedades  de uma chave neste exemplo
// a chave nome.
const produtoC = { nome: "Jarra", preco: 5.2 };
console.log("");
console.log(Object.getOwnPropertyDescriptor(produtoC, "nome"));
console.log("");
console.log(Object.values(produtoC));
console.log("");
console.log(Object.entries(produtoC));
console.log("");
// Desentruturação do Objeto utilizando Object.entries
for (let [chave, valor] of Object.entries(produtoC)) {
  console.log(chave, valor);
}

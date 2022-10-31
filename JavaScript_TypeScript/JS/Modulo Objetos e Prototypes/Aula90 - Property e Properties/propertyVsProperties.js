// Object.defineProperty: propriedades de uma chave
// Object.defineproperties: define propriedades de varias chaves
function Produto(id, nome, preco, estoque) {
  this.id = id;
  this.nome = nome;
  this.preco = preco;

  //   Configura as propriedades de uma chave do Objeto
  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave do Objeto ex: estoque
    value: estoque, //Mostra o valor do conteudo da chave
    writable: true, // controla se o valor pode ou não ser alterado.
    configurable: false, // pode apagar a chave ou não, pode configurar ou não a chave
  });

  //   Configura as propriedades de várias chaves do Objeto
  Object.defineProperties(this, {
    id: {
      enumerable: false,
      value: id,
      writable: true,
      configurable: true,
    },
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto(1, "Camiseta", 20, 3);
// p1.estoque = 100;
// delete p1.estoque; // com o configurable false não é possivel deletar a chave estoque.
console.log(p1);
console.log("");
console.log(Object.keys(p1)); // mostra as chaves de um objeto em um array.
// console.log("");
// for (let chave in p1) {
//   console.log(chave);
// }

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);

const p2 = {
  nome: "Caneca",
  preco: 15,
};

// setando o prototype do Objeto p3
const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 99,
  },

  tamanho: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 42,
  },
});
// p3.preco = 110;
p3.aumento(10);

// para a instância p2 do objeto Produto assumir os seus metodos
// devemos dizer qual é o seu prototype:
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
p1.desconto(50);
p1.aumento(10);
console.log(p1);
console.log("");
console.log(p2);
console.log("");
console.log(p3);

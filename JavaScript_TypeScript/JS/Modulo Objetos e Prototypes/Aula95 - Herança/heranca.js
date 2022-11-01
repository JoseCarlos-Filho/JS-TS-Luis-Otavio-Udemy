// Abstração: Produto
// Camiseta, caneca, lápis
// Camiseta-> Cor, Material
// Produto -> pode ter: aumento, desconto
/* ----- 
    Construindo a aplicação de acordo com a abstração acima 
----- */

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

// função construtura para a Camiseta
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
// prototype de camiseta assumi o prototype de produto
// porém a função construtora passa a ser de Produto e não de Camiseta
// neste caso devemos dizer qual é o prototype de Camiseta.
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// mudando o comportamento do metodo aumenta na instância Camiseta
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (valor !== "number") return "Náo é um numero.";
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const produto = new Produto("generico", 111);
const camiseta = new Camiseta("Regata", 7.5, "Preta");
const caneca = new Caneca("Stanley", 12.5, "Plástico", 23);
caneca.estoque = 120;

// camiseta.aumento(100);
// caneca.aumento(100);
console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);

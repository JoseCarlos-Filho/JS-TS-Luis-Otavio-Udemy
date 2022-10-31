// Getter e Setter em funções construtoras
function Produto(id, nome, preco, estoque) {
  this.id = id;
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  //   Configura as propriedades de uma chave do Objeto
  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave do Objeto ex: estoque
    // value: estoque, //Mostra o valor do conteudo da chave
    // writable: true, // controla se o valor pode ou não ser alterado.
    configurable: true, // pode apagar a chave ou não, pode configurar ou não a chave
    get: function () {
      return estoque;
    },

    set: function (valor) {
      //   console.log(valor);
      if (typeof valor !== "number") {
        console.log("Incorrect Value");
        // throw new typeError("tipo não numérico");
        return;
      }
      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto(1, "Camiseta", 20, 3);
// p1.estoque = 100;
// console.log(p1);
console.log("");
p1.estoque = "Qualquer valor";
console.log(`Qtda estoque : ${p1.estoque}`);

// Factory function
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("QUE", "QUEIROIZ");
      nome = valor;
    },
  };
}

const p2 = criaProduto("Camiseta");
p2.nome = "É NOIS QUE";
console.log("");
console.log(p2.nome);

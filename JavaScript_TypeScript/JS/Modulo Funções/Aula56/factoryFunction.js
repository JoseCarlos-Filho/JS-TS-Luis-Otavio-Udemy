/*
 * Funções Fábricas: funções que devolve um objeto.
 * this : sempre é utilizado pelo objeto que está sendo chamado
 */

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `Nome completo: ${this.nome} ${this.sobrenome}`;
    },

    // Setter seta o valor de um atributo do objeto.
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala(assunto = "está falando Oi!") {
      return `${this.nome} está ${assunto}.`;
    },

    altura: altura,
    peso: peso,
    // Getter a função imc() passa a ser um atributo do objeto utilizando get
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return `O Imc de ${this.nome} é: ${indice.toFixed(2)}`;
    },
  };
}

const p1 = criaPessoa("José", "Carlos", 1.84, 100);
const p2 = criaPessoa("Bastião", "Carlos", 1.74, 95);
const p3 = criaPessoa("Paulo", "Carlos", 1.8, 90);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

// const p2 = criaPessoa("Maria", "Joaquina", 1.6, 42);

// console.log(p1.fala("falando sobre JS"));
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc); // o imc passa a ser chamado como um atributo do objeto.
// p1.nomeCompleto = "Elaine Tiemi Ito";
// // console.log(p1.nomeCompleto); // o nomeCompleto() passa a ser chamado como um atributo do objeto.
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());

// console.log(p2.fala("falando sobre JS"));
// console.log(p2.imc());

/*
 * Função construtora (Constructor function)
 */

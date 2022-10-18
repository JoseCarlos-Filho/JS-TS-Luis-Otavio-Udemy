// Função construtora -> constroi objetos
// Função fabrica - fabrica objetos
//  convenção função contrutora - Pessoa (new)
// uma função contrutora sempre tem o nome da função com a primeira letra
// maiuscula neste exemplo Pessoa.

function Pessoa(nome, sobrenome) {
  // Atributos ou metodos privados
  const ID = 123;

  const metodoInterno = () => {
    console.log(`este é o ID do usuário: ${ID} Metodo privado.`);
  };

  metodoInterno();

  // Atributos ou metodos públicos
  this.nome = nome; // O mesmo que Pessoa.nome = nome
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": sou um metodo");
  };
}

// A palavra new cria um objeto vazio
// A palavra this aponta para o objeto que esta sendo utilizado.
// Não tendo a necessidade de utilizar a palavra return na função construtora.
const p1 = new Pessoa("Jose", "Carlos");
const p2 = new Pessoa("Maria", "Oliveira");

console.log(p1.nome);
p2.metodo();

// IIFE -> Immediately invoked function expression
// Utiliza de funções que não são acessadas de forma global.
(function (idade, peso, altura) {
  const sobrenome = "Carlos";
  function criaNome(nome) {
    return `${nome} ${sobrenome}`;
  }

  function falaNome() {
    console.log(criaNome("José"));
  }

  falaNome();
  console.log(`Com idade: ${idade}, Peso: ${peso}, Altura: ${altura}`);
})(37, 100, 1.84);

const nome = "Qualquer coisar";

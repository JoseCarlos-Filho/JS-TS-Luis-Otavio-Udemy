// Filter : sempre retorna um novo array com a mesma quantidade de elementos ou menos.
//  Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

// Outra forma mais simplicada ainda com função de callback.
const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

// Arrow Function: forma de ter a mesma funcionalidade com a função de callback.
/* ---------------------------------------------------
  const numerosFiltrados = numeros.filter((valor) => {
  return valor > 10;
});
console.log(numerosFiltrados);
-----------------------------------------------------*/

/*
    Uma forma de resolver, mais não é a melhor solução
    -------------------------------------------------_

function callbackFilter(valor) {
  return valor > 10;
  //   if (valor > 10) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
-------------------------------------------------------*/

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Arrow function nome com o nome maior ou igal a 5 letras
console.log(`Pessoas com o nome maior ou igual a 5 letras -> `);
const nomePessoasMaiorCinco = pessoas.filter(
  (objPessoa) => objPessoa.nome.length >= 5
);
console.log(nomePessoasMaiorCinco);

// Arrow function pessoas com mais de 50 anos
console.log("");
console.log(`Pessoas com idade maior que 50 anos -> `);
const maiorDeCinquentaAnos = pessoas.filter(
  (objPessoa) => objPessoa.idade > 50
);
console.log(maiorDeCinquentaAnos);

console.log("");
console.log(`Pessoas com nome que termina com a letra a -> `);
const nomeTerminaComA = pessoas.filter(
  (objPessoa) => objPessoa.nome.toLowerCase().endsWith("a")
  // Obs Importante!!!
  // O método endsWith() indica se uma string termina com
  // determinados caracteres, retornando true ou false.
);
console.log(nomeTerminaComA);

// const nomePessoasMaiorCinco = pessoas.filter(function (objPessoa) {
//   if (objPessoa.nome.length >= 5) return objPessoa.nome;

//   //   console.log(objPessoa.nome);
//   //   let numLetras = objPessoa.nome.length;
//   //   console.log(numLetras);
//   //   if (numLetras.length >= 5) {
//   //     console.log
//   //   }
// });
// console.log(nomePessoasMaiorCinco);

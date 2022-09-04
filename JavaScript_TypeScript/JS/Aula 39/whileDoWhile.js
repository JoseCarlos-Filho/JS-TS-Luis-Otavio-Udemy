// Aula de while e do while

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++; // necessário o incremento ou decremento conforme necessidade a ser chegado no while.
// }

// const nome = "José";
// let index = 0;

// while (index < nome.length) {
//   console.log(nome[index]);
//   index++; // necessário o incremento ou decremento conforme necessidade a ser chegado no while.
// }

// console.log("segue o jogo....");

function random(min, max) {
  const r = Math.random() * (max - min) + min; // devolve numero randomico com casas decimais
  return Math.floor(r); // devolve numero inteiro.
}

const min = 1;
const max = 50;
//let rand = 10;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("#############");

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
//   //   if (numero % 2 === 0) {
//   //     continue;
//   //   }

//   if (numero === 2) {
//     console.log("Pulei o número 2");
//     continue;
//   }
//   console.log(numero);

//   if (numero === 7) {
//     console.log("Parou no 7");
//     break;
//   }
// }

// funciona da mesma forma que o for acima.
// for (let i in numeros)

//for clássico.
// for (let i = 0; i < numeros.length; i++) {
//   let numero = numeros[i];
//   //   if (numero % 2 === 0) {
//   //     continue;
//   //   }

//   if (numero === 2) {
//     console.log("Pulei o número 2");
//     continue;
//   }
//   console.log(numero);

//   if (numero === 7) {
//     console.log("Parou no 7");
//     break;
//   }
// }

// com laço while, tome cuidado para não cair em um laço infinito.
// para utilização da condição sempre incrementar ou decrementar antes,
// das palavras reservadas continue e break.
let indice = 0;
while (indice < numeros.length) {
  let numero = numeros[indice];

  if (numero === 2) {
    console.log("Pulei o número 2");
    indice++;
    continue;
  }
  console.log(numero);

  if (numero === 7) {
    console.log("Parou no 7");
    indice++;
    break;
  }

  indice++;
}

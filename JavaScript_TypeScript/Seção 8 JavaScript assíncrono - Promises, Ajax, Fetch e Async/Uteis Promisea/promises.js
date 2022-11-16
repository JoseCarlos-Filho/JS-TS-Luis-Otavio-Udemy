function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("NO STRING");
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise!");
      return;
    }, tempo);
  });
}

// Promise.all, Promise.race, Promise.resolve, Promise.reject
const promises = [
  // "Primeiro valor",
  esperaAi("Promise 1", aleatorio(1, 5)),
  esperaAi("Promise 2", aleatorio(1, 5)),
  esperaAi("Promise 3", aleatorio(1, 5)),
  esperaAi(0000, aleatorio(1, 5)),
  // "Outro Valor",
];

// Promise.all -> resolve todas as promises
// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Promise.race resolve a promise mais rápida.
// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

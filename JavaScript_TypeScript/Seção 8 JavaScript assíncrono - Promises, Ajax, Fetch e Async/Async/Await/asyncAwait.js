function aleatorio(min = 0, max = 3) {
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

// Await: 3 estados ->
// pendente <pending>
// fullfilled -> resolvida
// rejected -> rejeitada
async function executa() {
  try {
    const fase1 = esperaAi("Fase 1", aleatorio());
    console.log(fase1);

    setTimeout(() => {
      console.log("Promise esta pendente", fase1);
    }, 1100);
    const fase2 = await esperaAi("Fase 2", aleatorio());
    console.log(fase2);
    const fase3 = await esperaAi(3, aleatorio());
    console.log(fase3);
    console.log("Terminamos na fase :", fase3);
  } catch (e) {
    console.log("Erro: ", e);
  }
}
executa();

//  retornando de forma sincrona
// esperaAi("Fase 1", aleatorio())
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi("Fase 2", aleatorio());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi("Fase 3", aleatorio());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return fase;
//   })
//   .then((fase) => {
//     console.log("Terminamos na fase :", fase);
//   })
//   .catch((e) => console.log("Erro :", e));

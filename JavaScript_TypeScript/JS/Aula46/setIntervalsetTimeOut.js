function viewHours() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

// Arrow function
// setInterval(() => {
//   console.log(viewHours());
// }, 1000);

// Outra solução
const timer = setInterval(() => {
  console.log(viewHours());
}, 1000);

// função que para a execução em um determinado intervalo
setTimeout(() => {
  clearInterval(timer); // para a execução
}, 10000);

setTimeout(() => {
  console.log("Execução finalizada!!!");
}, 12000);

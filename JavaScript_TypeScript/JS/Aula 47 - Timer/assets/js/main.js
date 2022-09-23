// função que configura os segundos serando o relogio no padrão unix 1970
// configura a timezone.
function createSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
// let timer;
let timer;

// Função que inicia o relógio incrementando o segundo
// passando o segundo para a função criaSegundos (formatação do pafrão da hora)
function startRelogio() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = createSegundos(segundos);
    // console.log(segundos);
  }, 1000);
}

iniciar.addEventListener("click", (e) => {
  relogio.classList.remove("pausa");
  clearInterval(timer);
  startRelogio();
});

pausar.addEventListener("click", (e) => {
  relogio.classList.add("pausa");
  clearInterval(timer); // pausa o relógio.
});

zerar.addEventListener("click", (e) => {
  relogio.classList.remove("pausa");
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
});

// Calculadora com funções Construtoras
function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaClick = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      console.log(el.classList);
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.addNumDisplay(el);
      if (el.classList.contains("btn-del")) this.addNumDisplay(el);
      if (el.classList.contains("btn-eq")) this.addNumDisplay(el);
    });
  };

  this.addNumDisplay = (el) => (this.display.value += el.innerText);

  this.inicia = () => {
    this.capturaClick();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();

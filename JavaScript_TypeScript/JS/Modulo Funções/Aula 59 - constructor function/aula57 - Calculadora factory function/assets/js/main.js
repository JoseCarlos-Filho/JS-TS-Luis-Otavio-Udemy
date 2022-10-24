// Calculadora com funções Construtoras
function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaClick = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      console.log(el.classList);
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del(el);
      if (el.classList.contains("btn-eq")) this.result(el);
    });
  };

  this.addNumDisplay = (el) => (this.display.value += el.innerText);

  this.clear = () => (this.display.value = "");

  this.inicia = () => this.capturaClick();

  this.del = () => (this.display.value = this.display.value.slice(0, -1));
}

const calculadora = new Calculadora();
calculadora.inicia();

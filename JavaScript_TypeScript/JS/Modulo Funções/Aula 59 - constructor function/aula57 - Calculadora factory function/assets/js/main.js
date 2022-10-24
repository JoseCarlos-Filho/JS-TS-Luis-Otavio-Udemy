// Calculadora com funções Construtoras
function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaClick = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      console.log(el.classList);
      if (el.classList.contains("btn-num")) this.addNumDisplay();
    });
  };

  this.inicia = () => {
    this.capturaClick();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();

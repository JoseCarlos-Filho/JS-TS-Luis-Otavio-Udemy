// Calculadora com funções Construtoras
function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaClick = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
    });
  };

  this.inicia = () => {
    this.capturaClick();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();

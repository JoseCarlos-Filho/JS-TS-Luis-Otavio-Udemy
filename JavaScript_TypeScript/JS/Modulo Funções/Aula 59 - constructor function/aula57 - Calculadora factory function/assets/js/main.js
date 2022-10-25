// Calculadora com funções Construtoras
function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaClick();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.keyCode !== 13) return;
      this.resultado();
    });
  };
  this.capturaClick = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      // console.log(el.classList);
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.resultado();
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => (this.display.value = "");

  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  this.resultado = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("Conta inválida!");
        return;
      }

      this.display.value = conta;
    } catch (e) {
      alert("Conta inválida!");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();

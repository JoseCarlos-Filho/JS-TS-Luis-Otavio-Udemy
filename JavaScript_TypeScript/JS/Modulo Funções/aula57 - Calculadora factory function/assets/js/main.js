function criaCalculadora() {
  return {
    // VARIAVEIS
    display: document.querySelector(".display"),

    // METODOS
    inicia() {
      //   alert("Calculadora inicializada!");
      this.cliqueBotoes();
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {},

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        //   console.log(this);
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();

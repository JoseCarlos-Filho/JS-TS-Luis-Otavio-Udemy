function criaCalculadora() {
  return {
    // VARIAVEIS
    display: document.querySelector(".display"),

    // METODOS
    clearDisplay() {
      this.display.value = "";
    },

    inicia() {
      //   alert("Calculadora inicializada!");
      this.cliqueBotoes();
    },

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
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();

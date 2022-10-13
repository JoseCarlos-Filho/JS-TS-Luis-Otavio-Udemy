function criaCalculadora() {
  return {
    // VARIAVEIS
    display: document.querySelector(".display"),

    // METODOS
    inicia() {
      //   alert("Calculadora inicializada!");
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;
          //   console.log(this);
          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }
        }.bind(this)
      );
    },

    btnParaDisplay(valor) {},
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();

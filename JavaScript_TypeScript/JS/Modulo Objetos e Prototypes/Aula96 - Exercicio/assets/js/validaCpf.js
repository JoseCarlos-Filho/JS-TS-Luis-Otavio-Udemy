// 705.484.450-52, 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
se o numero digito for maior que 9, consideremos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número for maior 9, consideremos 0.

utilizar no código
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));
*/
function masterCPF() {
  const cpfInput = document.querySelector(".input-teste-1");
  const resultado = document.querySelector(".resultado");
  const btnVerificar = document.querySelector(".btn-verificar");

  btnVerificar.addEventListener("click", () => {
    if (!cpfInput.value) {
      return alert("cpf inválido ou faltando informação");
    } else {
      const cpf = new ValidaCPF(cpfInput.value);
      console.log(cpf.valida());
      //   mostraCPF(cpf);
      resultado.innerHTML = `<p>Cpf digitado: ${cpf.cpfPuro}</p>`;
    }
  });

  function ValidaCPF(cpfInput) {
    // definição de propriedade da função construtora ValidaCPF, cpfPuro.
    Object.defineProperty(this, "cpfPuro", {
      enumerable: true,
      get: function () {
        return cpfInput.replace(/\D+/g, "");
      },
    });
  }

  //   metodo da função ValidaCPF
  ValidaCPF.prototype.valida = function () {
    // verifica se o cpf retorna valor indefinido e não pode ser maior que 11 digitos.
    if (typeof this.cpfPuro === "undefined") return false;
    if (this.cpfPuro.length !== 11) return false;
    // Array parcial recebe o valor de 9 digitos removendo as duas ultimas posições
    const parcialCpf = this.cpfPuro.slice(0, -2);
    // constante que recebe o valor do primeiro digito a ser validado
    const digitoUm = this.criaDigito(parcialCpf);
    return true;
  };

  ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    // Array parcial com 9 digitos com valores distribuidos dentro do array
    const parcialCpfArray = Array.from(cpfParcial);
    // Array para calculo decrescente do array parcial, veja descrição no topo deste código
    let decrescenteArray = parcialCpfArray.length + 1;

    // console.log(decrescenteArray);

    const totalDigito = parcialCpfArray.reduce((acumulador, valor) => {
      console.log(decrescenteArray, valor, decrescenteArray * valor);
      decrescenteArray--;
      return acumulador;
    }, 0);
  };
}

masterCPF();

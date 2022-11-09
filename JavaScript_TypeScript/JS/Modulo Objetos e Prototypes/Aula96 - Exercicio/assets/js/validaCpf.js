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
      cpf.valida();
      //   resultado.innerHTML = `<p>Cpf digitado: ${cpf.cpfPuro}</p>`;
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
    if (this.cpfPuro.length !== 11) {
      alert("Cpf inválido, quantidade de digitos excedido!");
      return (
        (resultado.innerHTML = `<p>Cpf digitado: ${this.cpfPuro} Cpf inválido verifique a quantia de digitos!</p>`),
        false
      );
    }
    // Array parcial recebe o valor de 9 digitos removendo as duas ultimas posições
    const parcialCpf = this.cpfPuro.slice(0, -2);
    // constante que recebe o valor do primeiro digito a ser validado
    const digitoUm = this.criaDigito(parcialCpf);
    const digitoDois = this.criaDigito(parcialCpf + digitoUm);
    console.log("digito um :", digitoUm);
    console.log("digito dois :", digitoDois);
    const novoCpf = parcialCpf + digitoUm + digitoDois;
    console.log(novoCpf);
    novoCpf === this.cpfPuro;
    resultado.innerHTML = `<p>Cpf digitado: ${this.cpfPuro} é Válido</p>`;
    return true;
  };

  ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    // Array parcial com 9 digitos com valores distribuidos dentro do array
    const parcialCpfArray = Array.from(cpfParcial);
    // Array para calculo decrescente do array parcial, veja descrição no topo deste código
    let decrescenteArray = parcialCpfArray.length + 1;

    // console.log(decrescenteArray);

    let totalDigito = parcialCpfArray.reduce((acumulador, valor) => {
      // repare que o valor é uma string, cuidado ao fazer operações matemáticas
      //   deve-se converter em Numerico para garantir que o resultado seja do tipo number
      //   console.log(decrescenteArray, valor, decrescenteArray * valor);
      // somando o valor de acumulador com o resultado da multiplicação do decrescenteArray com o valor do parcialCpfArray
      acumulador = acumulador + decrescenteArray * Number(valor);
      //   console.log(acumulador, decrescenteArray);
      decrescenteArray--;
      return acumulador;
    }, 0);
    // console.log(totalDigito);
    // operação artimética para encontrar o primeiro digito da validação.
    // pegando a soma total dos digitos realizado acima com o resto da divisão por 11.
    const primeiroDigito = 11 - (totalDigito % 11);
    // console.log(primeiroDigito);
    return primeiroDigito > 9 ? "0" : String(primeiroDigito);
    // if (primeiroDigito > 9) return "0";
    // return String(primeiroDigito);
  };
}

masterCPF();

// Construindo a solução de validação de CPF com Classes
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""), //expresão regular que retira os ponto etraços e deixa somente o número limpo
    });
  }

  eSequencia() {
    // Nesta instrução de código o método eSequencia busca o caractere
    // do cpfLimpo na posição 0 repetindo este caracter no tamanho total dos
    // digitos do cpfLimpo de forma a verificar se o mesmo é ou não uma sequencia numérica.
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    // return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
  }

  geraNovoCpf() {
    // Neste método é passado p cpf limpo menos os 2 ultimos digitos
    // na sequencia o método geraDigito é chamado para fazr o calculo de checagem do cpf
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    // console.log(cpfSemDigitos);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  // O método geraDigito pode ser estático, pelo motivo de não usar em seu metodo
  // a palavra reservada "this" que referente a instância da classe, neste caso
  // colocamos a palavra "static" na frente do metodo. Na chamada deste método deve-se
  // substituir a palavra reservada "this" pelo nome da classe no caso "ValidaCPF"
  static geraDigito(cpfSemDigitos) {
    // método que verifica o penúltimo e o ultimo digito do cpf
    // de forma que valide ou não o cpf.
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      // console.log(stringNumerica, reverso);
      total += reverso * Number(stringNumerica);
      reverso--;
      // console.log(stringNumerica, typeof stringNumerica);
    }
    // console.log(total);
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    // checagem do cpfLimpo verificando sua existência
    if (!this.cpfLimpo) return false;
    // Verificação se cpfLimpo não é uma string
    if (typeof this.cpfLimpo !== "string") return false;
    // Verificação da quantidade de caracteres do cpf igual a 11
    if (this.cpfLimpo.length !== 11) return false;
    // Verificação se o cpf é uma sequencia numérica;
    if (this.eSequencia()) return false;
    // Verifica  se gerou novo cpf
    this.geraNovoCpf();
    console.log(this.novoCPF);

    return this.novoCPF === this.cpfLimpo;
  }
}

let validacpf = new ValidaCPF("336.487.758-04");
// validacpf = new ValidaCPF("999.999.999-99");
// console.log(validacpf.valida());
validacpf.valida() ? console.log("CPF Válido") : console.log("CPF Inválido");

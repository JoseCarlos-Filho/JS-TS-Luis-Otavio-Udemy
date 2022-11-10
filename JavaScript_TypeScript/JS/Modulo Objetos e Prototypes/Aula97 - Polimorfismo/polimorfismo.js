// Super Classe ou classe Pai.
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/C: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); // Herança da function Conta.
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    // this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); // Herança da function Conta.
  this.limite = limite;
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// const pessoaFisica = new Conta(11, 22, 10);
// pessoaFisica.depositar(20);
// pessoaFisica.depositar(10);
// pessoaFisica.sacar(20);
// pessoaFisica.sacar(20);
// pessoaFisica.sacar(1);

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); // Herança da function Conta.
  this.limite = limite;
}

const CC = new ContaCorrente(11, 22, 0, 100);
CC.depositar(10);
CC.sacar(90);
CC.sacar(20);
CC.sacar(1);

console.log("");

const CP = new ContaPoupanca(12, 33, 0);
CP.depositar(10);
CP.sacar(110);
CP.sacar(1);

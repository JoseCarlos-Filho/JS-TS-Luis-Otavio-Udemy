class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " está ligado!");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " está desligado!");
      return;
    }

    this.ligado = false;
  }
}

// Fazendo a herança da classe DispositivoEletronico
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); // chama o construtor da classe pai.
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, wifi, tamanhoTela) {
    super(nome);
    this.wifi = wifi;
    this.tamanhoTela = tamanhoTela;
  }

  falaOi() {
    console.log(this.nome + " fala Oi!!!");
  }

  //   ligar() {
  //     console.log("Veja, você alterou o método ligar");
  //   }
}

const s1 = new Smartphone("Samsung", "Silver", "Galaxy s10");
// s1.ligar();
console.log(s1);

const t1 = new Tablet("iPad", true, 9.0);
t1.ligado;
t1.ligar();
t1.falaOi();
console.log(t1);

// const d1 = new DispositivoEletronico("Smartphone");
// d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);

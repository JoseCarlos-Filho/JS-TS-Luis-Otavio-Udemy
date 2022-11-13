class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Métodos de instância
  //   São acessado apartir da declaração de um objeto da classe
  //  por exemplo: controle1.aumentarVolume();
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  //   Método estático
  //   Este metodo é acessado diretamente pela classe
  //  por exemplo: ControleRemoto.trocaPilha();
  static trocaPilha() {
    console.log("Ok, vou trocar.");
  }
}

const controle1 = new ControleRemoto("LG");
// chamado dos métodos de instância, declaro objeto da classe para acessar os métodos.
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

// chamado do metodo estático diretamente pela classe.
ControleRemoto.trocaPilha();
console.log(controle1);

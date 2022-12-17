// arraw function gera numero aleatório
// Obs: o range de numeros passado para a função rand é referente a tabela ASCII
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

// gera letra maiuscula apartir do numero aleatório do range informado na função rand..
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));

// gera letra minusculas a partir do número aleatório do range informado na função rand.
const geraMinuscula = () => String.fromCharCode(rand(97, 123));

// gera letra número a partir do número aleatório do range informado na função rand.
const geraNumero = () => String.fromCharCode(rand(48, 58));

// String de simbolos
const simbolos = ",.;~^[]{}!@#$%*()_+=-";

// gera simbolo de acordo com o range da minha string de simbolos.
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

function geraSenha(quantidade, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  quantidade = Number(quantidade);
  for (let i = 0; i < quantidade; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  return senhaArray.join("").slice(0, quantidade);
}

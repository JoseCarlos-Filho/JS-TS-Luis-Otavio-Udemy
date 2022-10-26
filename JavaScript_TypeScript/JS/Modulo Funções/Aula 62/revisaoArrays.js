// Declaração de array de forma literal
const nomes = [
  "Jose",
  "Carlos",
  "Rodrigues",
  "Filho",
  "Elaine",
  "Tiemi",
  "Ito",
  "Vitória",
  "Chie",
];
// nomes[2] = "Opa";
// delete nomes[2];
// console.log(nomes);
// nomes[2] = "Rodrigues";
// console.log(nomes);

// Declação utilizando construtor não muito utilizado.
// Serve para String, Objetos, Funções, Números,
const arrayNomes = new Array("Paulo", "Ricardo", "Jandir");
arrayNomes[2] = "Bastião";
console.log(arrayNomes);
delete arrayNomes[2];
console.log(arrayNomes);

// valor por referência
// utilizando spread operator
// atributo length para tamanho do array

const novo = [...nomes];
const removido = novo.pop(); // nome removido do final do array
const removePrimeiro = novo.shift(); // remove o primeiro indice do array.
// console.log(nomes);
// console.log(novo);
// console.log(novo.length); // tamanho do array
console.log(novo, removido); // exibi array e o nome removido do final do array.
console.log(novo, removePrimeiro); // exibi nome removido do inicio do array.

// Adiciona indices "Conteudo" no final do array.
novo.push("Bastião");
novo.push("Margarete");
// Adiciona indice 'conteudo' no inicio do array.
novo.unshift("José");
novo.unshift("Marcos");

console.log(novo);

// Fatiando o array com slice()
const novoArray = nomes.slice(1, 3);
console.log(novoArray);

// Removendo o ultimo elemento do Array utilizando o slice()
const sliceUltimo = nomes.slice(0, -1);
console.log(sliceUltimo);

// convertendo STRING em ARRAY
const eu = "José Carlos Rodrigues Filho";
const outroForma = "Elaine, Tiemi, Ito, Rodrigues";
const outra = outroForma.split(",");
const meunome = eu.split(" ");
console.log(meunome);
console.log(outra);

// convertendo ARRAY em STRING
const eudenovo = ["José", "Carlos", "Rodrigues", "Filho"];
const stringEu = eudenovo.join(" ");
console.log(stringEu);

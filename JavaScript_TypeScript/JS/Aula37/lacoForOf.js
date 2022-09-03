// Aula de For Of
const nomes = ["José", "Carlos", "Rodrigues", "Filho"];

// for clássico acessando cada letra da string
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("#######################");

// retorna o valor da propriedade de cada indice
for (let index in nomes) {
  console.log(nomes[index]);
}

console.log("#######################");

// na utilização do for of o array devolve o seu valor sem o indice.
for (let valor of nomes) {
  console.log(valor);
}

// todos os três for devolve a mesma saida, porém há casos que precise
// do indíce do array e não do valor, cada for tem sua utilização depende da situação.

console.log("#######################");

// forEach somente um exemplo de utilização.
nomes.forEach(function (valordoarray, indicedoarray, arraycompleto) {
  console.log(valordoarray, indicedoarray, arraycompleto);
});

console.log("#######################");

// com objetos e utilização do for
// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
const pessoa = {
  nome: "José",
  sobrenome: "Rodrigues",
  idade: 37,
};

for (let indice in pessoa) {
  console.log(indice, pessoa[indice]);
}

// Neste caso causa um erro porque o array de objeto pessoa para
// utiliza de uma nomenclatura de índices diferentes do usual.
// Retorna o erro: pessoa is not iterable
// for (let valores of pessoa) {
//   console.log(valores);
// }

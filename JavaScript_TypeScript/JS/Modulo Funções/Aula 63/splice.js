const nomes = ["Maria", "John", "Jill", "Jane", "Josh", "Billy"];

// nomes.splice(indice do array, delete quantidade de elementos a partir do indice, elementos para adicionar);
// nomes.slice(indice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(3, 2); // deleta a partir do indice 3,  2 elementos do array.
// console.log(nomes, removidos); // retorna um array em removidos por poder remover mais elementos.

// removendo o ultimo elemento do array
// esta funcionalidade do slice simula  o pop()
const removeUltimo = nomes.splice(-1, 1);
console.log(nomes, removeUltimo);

// Adicionando elementos a partir do indice definido.
const addElemento = nomes.splice(4, 0, "Tiemi");
console.log(nomes, addElemento);
// trocando informação do array com um determinado indice.
const substituiElemento = nomes.splice(1, 1, "Vitoria");
console.log(nomes, substituiElemento);

// Para simular o shift(): remove o primeiro elemento do array no cado com indice 0.
const simulaShift = nomes.splice(0, 1);
console.log(nomes, simulaShift);

// simulando o push(): colocar elemento no final do array.
nomes.splice(nomes.length, 0, "Elaine");
console.log(nomes);

// simulando o unshift(): colocando elemento no inicio do array.
nomes.splice(0, 0, "Jose", "Carlos", "Rodrigues");
console.log(nomes);

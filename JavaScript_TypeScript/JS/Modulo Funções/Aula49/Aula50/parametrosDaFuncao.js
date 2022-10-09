// A função definida com a palavra function tem uma variável
// especial que se chama "arguments" que sustenta todos os argumentos enviados.
// Não funciona em ArrowFunction
function funcao() {
  console.log(arguments);
}

funcao("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function somaArguments(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c);
}

/*
 * Repare que é passado menos parâmetros na função, por definição o JS
 * declara os outros parametros da função d, e, f e como não é atribuido
 * nenhum valor são exibidos com undefined
 */
somaArguments(1, 2, 3, 4, 5, 6, 7);

function exibiArguments(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

exibiArguments(1, 2, 3);

/*
 * Nesta função se você deixa de passar os parâmetros a soma retorna NaN
 * por não ser uma operação válida, a soma do parametro 2 com undefined retorna NaN.
 * Ou para efetuar a operação da função atribuir os valores diretamente nos parâmetros
 * Repare que na função é paasado o valor 10 como parametro logo o parâmetro b assume
 * o valor 10.
 */

function parametros(a, b = 2, c = 4) {
  console.log(a + b + c);
}

parametros(2, 10);

/*
 * Neste Caso para o parametro b assumir o valor padrão que é 2 é preciso
 * passar para a função o valor undefined. Se o parametro for passado como null
 * o parâmetro assume o valor 0.
 */

function parametrosSoma(a, b = 2, c = 4) {
  console.log(a + b + c);
}

parametrosSoma(2, undefined, 20);
parametrosSoma(2, null, 20);

/*
 * Atribuição via desestruturação passando um objeto no parâmetro da função.
 */
function objFuncao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let obj = { nome: "Jose", sobrenome: "Carlos", idade: 37 };
objFuncao(obj);

/*
 * Atribuição via desestruturação passando um Array no parâmetro da função.
 */
function arrayFuncao([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

arrayFuncao(["Jose", "Carlos Rodrigues", "37"]);

/*
 * Nesta função utilizamos o Rest Operator "...numeros" para interar o resto dos parâmetros na função
 */

function conta(operador, acumulador, ...numeros) {
  //   console.log(operador, acumulador, numeros);

  for (let numero of numeros) {
    // console.log(numero);
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }

  console.log(acumulador);
}

conta("+", 0, 20, 30, 40, 50);

/*
 * Função Arrow
 */
const calculo = (...args) => {
  // const calculo = (operador, acumulador, ...numeros) => {
  //   console.log(operador, acumulador, numeros);
  console.log(args);
};

calculo("+", 0, 20, 30, 40, 50);

/* 
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primerira vez, servindo de modelo ou molde para futuras produções.

Todos os objetivos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)

// Header da Page.
const header = document.querySelector(".header");
header.style.display = "flex";
header.style.alignItems = "center";
header.style.flexDirection = "column";

// Title d page
const title = document.querySelector(".title");
title.style.backgroundImage = "linear-gradient(to left, #C7C7C9, #1C1C1C)";
title.style.backgroundClip = "text";

// title = "-webkit-background-clip: text";
title.style["-webkit-background-clip"] = "text";
title.style["-webkit-text-fill-color"] = "transparent";
title.style.color = "black";

const corpo = document.querySelector(".container");
corpo.style.height = "25rem";
corpo.style.width = "50rem";
corpo.style.border = "5px solid #717A7D";
corpo.style.borderRadius = "5em";
corpo.style.background = "linear-gradient(to bottom, #9FA2BD, #4F5160)";
corpo.style.display = "flex";
corpo.style.justifyContent = "center";
corpo.style.alignItems = "center";
corpo.style.color = "#fff";
corpo.style.wrapContent = "wrap";
corpo.style.fontWeight = "bold";
corpo.style.flexDirection = "column";

// Html container page (div)
corpo.innerHTML = `
    <h3>Conteúdo da Aula 93 - Prototypes</h3>
    <span>  
            Nesta aula utilize o inspetor da página
            para ver as ações da instância do Objeto Pessoa sendo 
            executado.
    </span>

`;

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => "Original: " + this.nome + " " + this.sobrenome;
}

// Repare que há um problema de performance em se criar instâncias do objeto Pessoa.
// Se criar 500 instâncias haverá 500 metodos do objeto pessoas
// para evitar este comportamento utiliza-se o prototype do Objeto.
// evitando este tipo de comportamento, onde o metodo será atribuido
// ao construtor pai (__proto__).
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

// Instâncias
const pessoa1 = new Pessoa("Luiz", "O."); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa("José", "C."); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);

// importanto os elementos do modulo1.js
// import { nome, sobrenome, idade, soma, Pessoa as Gente } from "./modulo1";

// importando todos os itens de modulo1.js com uma unica chamada.
import * as Modulogeral from "./modulo1";

// importando o item padrão do modulo1.js no caso o export default(modulo1.js);
// sempre que houver um import sem as chaves{}, estará importando o default do modulo1.js que neste caso é o nosso exemplo.
import subtracao from "./modulo1";

console.log(Modulogeral.nome, Modulogeral.sobrenome, Modulogeral.idade);
console.log(Modulogeral.soma(20, 18));
const p1 = new Modulogeral.Pessoa("Elaine", "Tiemi");
console.log(p1);
console.log(Modulogeral);
console.log(subtracao(50, 8));

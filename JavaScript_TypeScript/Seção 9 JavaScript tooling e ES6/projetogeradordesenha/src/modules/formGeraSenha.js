import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const chkMaiuscula = document.querySelector(".chk-maiusculas");
const chkMinuscula = document.querySelector(".chk-minusculas");
const chkNumero = document.querySelector(".chk-numeros");
const chkSimbolo = document.querySelector(".chk-simbolos");
const gerarSenha = document.querySelector(".gerar-senha");
export default () => {
  gerarSenha.addEventListener("click", () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chkMaiuscula.checked,
    chkMinuscula.checked,
    chkNumero.checked,
    chkSimbolo.checked
  );

  return senha || "Nada selecionado!!!";
}

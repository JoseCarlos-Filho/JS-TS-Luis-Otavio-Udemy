const inputTarefas = document.querySelector(".input_tarefas");
const btnTarefas = document.querySelector(".btn_tarefas");
const listaTarefas = document.querySelector(".lista_tarefas");

function botaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(botaoApagar);
}

function limpaInput() {
  inputTarefas.value = "";
  inputTarefas.focus();
}

function criaTagLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefas.addEventListener("keypress", (e) => {
  // console.log(e);
  if (e.keyCode === 13) {
    // console.log("Enter precionado!!!");
    if (!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
  }
});

function criaTarefa(textoInput) {
  // console.log(textoInput);
  const li = criaTagLi();
  li.innerText = textoInput;
  listaTarefas.appendChild(li);
  limpaInput();
  botaoApagar(li);
}

btnTarefas.addEventListener("click", () => {
  if (!inputTarefas.value) return;
  // console.log(inputTarefas.value);
  criaTarefa(inputTarefas.value);
});

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
  saveTasks();
}

btnTarefas.addEventListener("click", () => {
  if (!inputTarefas.value) return;
  // console.log(inputTarefas.value);
  criaTarefa(inputTarefas.value);
});

document.addEventListener("click", (e) => {
  const el = e.target;
  // console.log(e); // pega onde esta sendo clicado na page
  if (el.classList.contains("apagar")) {
    // console.log("Botão Apagar clicado");
    el.parentElement.remove(); // O pai do elemento será remivido, neste caso a tag <li></li> é o pai do elemento.
  }
});

function saveTasks() {
  const tarefasNaTagLi = listaTarefas.querySelectorAll("li");
  const listaDeTarefas = [];
  // console.log(tarefasNaTagLi);

  for (let tarefa of listaDeTarefas) {
    console.log(tarefa.innerText);
  }
}

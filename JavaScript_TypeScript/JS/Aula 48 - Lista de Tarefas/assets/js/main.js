const inputTarefas = document.querySelector(".input_tarefas");
const btnTarefas = document.querySelector(".btn_tarefas");
const listaTarefas = document.querySelector(".lista_tarefas");

function criaTagLi() {
  const li = document.createElement("li");
  return li;
}

function criaTarefa(textoInput) {
  // console.log(textoInput);
}

btnTarefas.addEventListener("click", () => {
  if (!inputTarefas.value) return;
  // console.log(inputTarefas.value);
  criaTarefa(inputTarefas.value);
});

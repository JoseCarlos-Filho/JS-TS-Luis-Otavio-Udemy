const inputTarefas = document.querySelector(".input_tarefas");
const btnTarefas = document.querySelector(".btn_tarefas");
const listaTarefas = document.querySelector(".lista_tarefas");

btnTarefas.addEventListener("click", () => {
  if (!inputTarefas.value) return;
  console.log(inputTarefas.value);
});

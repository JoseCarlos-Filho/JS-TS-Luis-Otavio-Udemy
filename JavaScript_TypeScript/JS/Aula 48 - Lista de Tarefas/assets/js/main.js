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

/*
 * Fuinção que captura o click no document, identifica se o elemento do botão apagar foi clicado.
 * após identificação a tarefa é apagada de acordo com o parentesco do elemento.
 * neste caso o texto da tarefa que esta dentro da tag <li></li> é apagado por <li></li> ser o elemento pai.
 */
document.addEventListener("click", (e) => {
  const el = e.target;
  // console.log(e); // pega onde esta sendo clicado na page
  if (el.classList.contains("apagar")) {
    // console.log("Botão Apagar clicado");
    el.parentElement.remove(); // O pai do elemento será remivido, neste caso a tag <li></li> é o pai do elemento.
    saveTasks();
  }
});

/*
 * Função que salva a tarefa que foi adicionado a tag<li></li> recebendo o texto da tarefa.
 * Removendo o texto Apagar com o replace e removendo os espaços em branco com a função trim();
 * O texto da tarefa é adicionado no Array utilizando o metodo push();
 * Logo após adicionar as tarefas e criado um arquivo JSON CONVERTENDO O ARRAY EM STRING
 * Após a criação do JSON, utiliza o locaStorage.setItem para salvar a tarefa que está no JSON.
 */
function saveTasks() {
  const tarefasNaTagLi = listaTarefas.querySelectorAll("li");
  const listaDeTarefas = [];
  // console.log(tarefasNaTagLi);

  for (let tarefa of tarefasNaTagLi) {
    let tarefaText = tarefa.innerText;
    tarefaText = tarefaText.replace("Apagar", "").trim();
    // console.log(tarefaText);
    listaDeTarefas.push(tarefaText); // adiciona a tarefa no array
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas); // convertendo a string de array para JSON.
  // console.log(listaDeTarefas);
  // console.log(tarefasJSON);
  localStorage.setItem("listaTarefas", tarefasJSON);
}

const inputTarefas = document.querySelector(".input_tarefas");
const btnTarefas = document.querySelector(".btn_tarefas");
const listaTarefas = document.querySelector(".lista_tarefas");

/*
 * Função que cria o botão Apagar para cada Tarefa da lista.
 * Adicionando propriedades de classes e titulos no botão.
 */
function botaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(botaoApagar);
}

/*
 * Função quw limpa o input após adicionar a Tarefa(task)
 *
 */
function limpaInput() {
  inputTarefas.value = "";
  inputTarefas.focus();
}

/*
 * Função que cria a tag <li></li> dentro da tag <ul></ul>
 *
 */
function criaTagLi() {
  const li = document.createElement("li");
  return li;
}

/*
 * adicionando tarefa através do evento de captura de tecla ENTER.
 * inclui tarefa após teclar em ENTER.
 */
inputTarefas.addEventListener("keypress", (e) => {
  // console.log(e);
  if (e.keyCode === 13) {
    // console.log("Enter precionado!!!");
    if (!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
  }
});

/*
 * Função que cria a tarefa e recebe como parâmetro o texto do input, cria o elemento<li></li>
 * com a função criaTagLi(), passa o parâmetro do input para o elemento criado no caso <li></li>
 * adiciona o li na ul(declarada acima como listaTarefas) com o metodo appendChild();
 * após adicionar na ul o input é limpo com a função limpaInput();
 * adiciona o botão Apagar na ListaTarefas passando como parâmentro o elemento criado <li></li>
 * salva a tarefa no localStorage através da função saveTasks();
 */
function criaTarefa(textoInput) {
  // console.log(textoInput);
  const li = criaTagLi();
  li.innerText = textoInput;
  listaTarefas.appendChild(li);
  limpaInput();
  botaoApagar(li);
  saveTasks();
}

/*
 * função que pega o evento do click do botão Adicionar Tarefa, verifica se o input tem informações
 * se não tiver não retorna nada, mas se tiver cria a tarefa chamando a função criaTarefa()
 */
btnTarefas.addEventListener("click", () => {
  if (!inputTarefas.value) return;
  // console.log(inputTarefas.value);
  criaTarefa(inputTarefas.value);
});

/*
 * Função que captura o click no document, identifica se o elemento do botão apagar foi clicado.
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

// adiciona as tarefas Salvas convertendo um JSON para um array.
function addTasksSaved() {
  const tarefas = localStorage.getItem("listaTarefas");
  const listaDeTarefas = JSON.parse(tarefas);
  // console.log(listaDeTarefas);
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

addTasksSaved();

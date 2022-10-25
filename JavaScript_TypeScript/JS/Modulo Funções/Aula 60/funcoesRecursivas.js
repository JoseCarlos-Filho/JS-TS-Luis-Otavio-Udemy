// Função recursiva: funções que chama ela mesma varias vezes.
// Porem ha um limite de chamadas na recursividade.
function recursiva(max) {
  console.log(max);
  if (max >= 1000) return;
  max++;
  recursiva(max);
}

recursiva(0);

const paragrafos = document.querySelector(".paragrafos"); // div paragrafos pega somente o primeiro elemento.
const parafs = paragrafos.querySelectorAll("p"); // todos os paragrafos da div

const styleBody = getComputedStyle(document.body);
const backColor = styleBody.backgroundColor;
console.log(backColor);

for (let valor of parafs) {
  valor.style.backgroundColor = backColor;
  valor.style.color = "white";
}

//"rgb(205, 206, 207)"

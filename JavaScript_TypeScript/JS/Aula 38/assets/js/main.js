const paragrafos = document.querySelector(".paragrafos"); // div paragrafos pega somente o primeiro elemento.
const parafs = paragrafos.querySelectorAll("p"); // todos os paragrafos da div

const styleBody = getComputedStyle(document.body);
const backColor = styleBody.backgroundColor;
const colorFont = styleBody.color;
console.log(backColor);
console.log(colorFont);

for (let valor of parafs) {
  valor.style.backgroundColor = backColor;
  valor.style.color = colorFont;
}

//"rgb(205, 206, 207)"

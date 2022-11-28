// Observação: xhr = XML Http Request padrão utilizado entre os desenvolvedores.
// const request = (obj) => {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open(obj.method, obj.url, true);
//       xhr.send();

//       xhr.addEventListener("load", () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//           resolve(xhr.responseText);
//         } else {
//           reject(xhr.statusText);
//         }
//       });
//     });
//   };

// evento de captura do click, pegando a tag <a> com os links na page index.html
document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});

async function loadPage(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);
    // obs: este é somente um exemplo de verificação, neste momento pode haver vários tipos de retorno.
    if (response.status !== 200) throw new Error("Error 404!");

    const html = await response.text();
    loadResult(html);
  } catch (e) {
    console.error(e);
  }
}

function loadResult(response) {
  const result = document.querySelector(".resultado");
  result.innerHTML = response;
}

// Observação: xhr = XML Http Request padrão utilizado entre os desenvolvedores.
const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
      //   obj.error({
      //     code: xhr.status,
      //     msg: xhr.statusText,
      //   });
    }
  });
};

// evento de captura do click, pegando a tag <a> com os links na page index.html
document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

function carregaPagina(el) {
  const href = el.getAttribute("href");

  request({
    method: "GET",
    url: href,
    success(response) {
      loadResult(response);
    },
    error(errorText) {
      console.log(errorText);
    },
  });
}

function loadResult(response) {
  const result = document.querySelector(".resultado");
  result.innerHTML = response;
}

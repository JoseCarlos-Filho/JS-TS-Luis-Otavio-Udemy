// Observação: xhr = XML Http Request padrão utilizado entre os desenvolvedores.
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
        //   obj.error({
        //     code: xhr.status,
        //     msg: xhr.statusText,
        //   });
      }
    });
  });
};

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
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
  };
  try {
    const response = await request(objConfig);
    loadResult(response);
  } catch (e) {
    console.log(e);
  }
}

function loadResult(response) {
  const result = document.querySelector(".resultado");
  result.innerHTML = response;
}

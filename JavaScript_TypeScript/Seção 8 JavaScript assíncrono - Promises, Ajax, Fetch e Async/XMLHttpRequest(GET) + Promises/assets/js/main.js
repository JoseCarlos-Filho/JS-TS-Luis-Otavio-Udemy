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

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
});

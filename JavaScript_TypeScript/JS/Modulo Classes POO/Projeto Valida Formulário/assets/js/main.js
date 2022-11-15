class CheckForm {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkInputs = this.validInputs();
    const validPasswords = this.passwordState();

    if (checkInputs && validPasswords) {
      alert(`Dados do formulário enviado.`);
      this.formulario.submit();
    }
  }

  passwordState() {
    let valid = true;

    const senha = this.formulario.querySelector(".input-senha");
    const repetirSenha = this.formulario.querySelector(".input-repetir_senha");

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.createError(senha, "Campos senha e repetir senha devem ser iguais.");
      this.createError(
        repetirSenha,
        "Campos senha e repetir senha devem ser iguais."
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.createError(senha, "Senha deve conter entre 6 e 12 caracteres");
    }

    return valid;
  }

  validInputs() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      //   console.log(campo);
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.createError(campo, `Campo "${label}" não pode estar em branco`);
        valid = false;
      }

      if (campo.classList.contains("input-cpf")) {
        // console.log(campo.classList.contains("input-cpf"));
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("input-usuario")) {
        // console.log(campo.classList.contains("input-cpf"));
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;
    if (usuario.length < 3 || usuario.length > 12) {
      this.createError(
        campo,
        "Nome do usuário deve ter entre 3 e 12 caracteres"
      );
      valid = false;
    }

    if (!usuario.match(/[a-zA-Z0-9]+/g)) {
      this.createError(
        campo,
        "Nome do usuário deve conter apenas letras e/ou números"
      );
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    // console.log(campo.value);
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.createError(campo, "CPF inválido");
      return false;
    }
    return true;
  }

  createError(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const validaCampo = new CheckForm();

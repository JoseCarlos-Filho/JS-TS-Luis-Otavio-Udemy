// try {
//   //   console.log(a);
//   console.log("Abri um arquivo");
//   console.log("Manipulei o arquivo e gerou erro");
//   console.log("Fechei o arquivo");

//   try {
//     console.log(b);
//   } catch (error) {
//     console.log("Deu erro aqui");
//   } finally {
//     console.log("Finally: Também sou sempre executado.");
//   }
// } catch (error) {
//   console.log("Tratando o erro");
// } finally {
//   console.log("Finally: Eu sempre sou executado");
// }

function horaFirst(data) {
  // verifica se a data passada para a função é uma instancia de Date
  // se a data for enviada e não for uma instância de Date executa a msg de erro
  if (data && !(data instanceof Date)) {
    // console.log("Não é do tipo data!");
    throw new TypeError("Esperando instância de Date.");
  }
  //   se a data não for enviada cria uma instância do tipo data
  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // transforma no formato 24hrs
  });
}

try {
  // horaFirst(11);
  const data = new Date("01-01-1970 12:58:12");
  const hora = horaFirst();
  // const hora = horaFirst(data);
  console.log(hora);
  // horaFirst(hora);
} catch (e) {
  // Trata o erro
  // console.log('Erro')
} finally {
  console.log("Tenha um bom dia !");
}

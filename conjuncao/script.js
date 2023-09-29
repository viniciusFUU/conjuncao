document.addEventListener("DOMContentLoaded", function () {
  //Pegando os elementos pelos id definidos
  const calcularBtn = document.getElementById("calcularBtn");
  const resultado = document.getElementById("resultado");

  //Adicionando evento de click nas variáveis definidas a cima
  calcularBtn.addEventListener("click", function () {
    const valor1 = document.getElementById("valor1").value.toUpperCase();
    const valor2 = document.getElementById("valor2").value.toUpperCase();

    //Definindo lógica para calcular de maneira correta
    if (
      (valor1 === "V" && valor2 === "V") ||
      (valor1 === "v" && valor2 === "v") ||
      (valor1 === "v" && valor2 === "V") ||
      (valor1 === "V" && valor2 === "v")
    ) {
      resultado.textContent = "Resultado: V (Verdadeiro)";
    } else if (valor1 === "" || valor2 === "") {
      resultado.textContent =
        "Algum valor está vázio, preencha todos os campos!";
    } else {
      resultado.textContent = "Resultado: F (Falso)";
    }
  });
});

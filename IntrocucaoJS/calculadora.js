var prompt = require("prompt-sync")();
//criar calculadora simples em js
function soma(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

var continuar = true;

while (continuar) {
  console.log("===Calculadora===");
  console.log("+. Soma");
  console.log("-. Subtração");
  console.log("*. Multplicação");
  console.log("/. Divisão");
  console.log("=. Sair");

  var operacao = prompt("Qual operação você deseja fazer?: ");
  var a = Number(prompt("Digite o primeiro número: "));
  var b = Number(prompt("Digite o segundo número: "));

  switch (operacao) {
    case "+":
      console.log("O resultado é: ", soma(a, b), "\n");
      break;
    case "-":
      console.log("O resultado é: ", sub(a, b), "\n");
      break;
    case "*":
      console.log("O resultado é: ", mult(a, b), "\n");
      break;
    case "/":
      if (b > 0) {
        console.log("O resultado é: ", div(a, b), "\n");
      } else {
        console.log("Não pode dividir por 0\n");
      }
      break;
    case "=":
      continuar = false;
      console.log("======Saindo======\n");
      break;
    default:
      console.log("Operação inválida\n");
      break;
  }
}

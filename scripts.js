const prompt = require("prompt-sync")();
//Atividade 1
console.log("Ambiente configurado com sucesso!");
console.log('=================================');


//Atividade 2.1
nome = "Guilherme";
idade = 16;
altura = 1.75;
programador = false;
console.log(`${nome} ${idade} ${altura} ${programador}`);
console.log("=================================");

//Atividade 2.2
let AnoNascimento = 2008;
let AnoNascimentoStr = String(AnoNascimento);
console.log(AnoNascimentoStr, typeof AnoNascimentoStr);

let peso = "80.5";
let pesoNum = Number(peso);
console.log(pesoNum, typeof pesoNum);
console.log("=================================");

//Atividade 2.3
let num1 = Number(prompt('Informe o primeiro número: '))
let num2 = Number(prompt('Informe o segundo número: '))

let soma= num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let div = num1/num2

console.log(`A soma dos números ${num1} e ${num2} é ${soma}`);
console.log(`A subtração dos números ${num1} e ${num2} é ${sub}`);
console.log(`A multiplicação dos números ${num1} e ${num2} é ${mult}`);
if(num2>0){
    console.log(`A divisão dos números ${num1} e ${num2} é ${div}`);
}
else{
    console.log('Não dividirás por zero!');   
}
console.log("=================================");

//Atividade 3.1
let numero = Number(prompt('Informe um número e eu direi se é ímpar ou par!: '))
if(numero % 2 === 0){
    console.log(`O número ${numero} é par!`);   
}
else{
    console.log(`O número ${numero} é ímpar!`); 
}
console.log("=================================");

//Atividade 3.2
let idade2 = Number(prompt('Digite a sua idade: '))
if(idade2 < 16){
    console.log('Não pode votar, e não pode tirar CNH!');
}
else if(idade2 <=17){
    console.log('Voto opcional, e não tirar CNH!');
}
else{
    console.log('Voto obrigatório, e pode tirar CNH!');
}
console.log("=================================");

//Atividade 4.1
let i

for(i=1;i<11;i++){
    console.log(i);  
}
console.log("=================================");

//Atividade 4.2
let j;
let numero2 = Number(prompt('Digite um número e eu mostrarei a tabuada dele: '))
let resultado = 0
for(j=1;j<11;j++){
    resultado+=numero2;
    console.log(`${numero2} x ${j} = ${resultado}`)
}
console.log("=================================");

//Atividade 4.3
let contagem = 10;
while(contagem != 0){
    console.log(contagem);
    contagem -= 1;
}
console.log("Feliz Ano Novo !!!");  
console.log("=================================");

//Atividade 5.1
function boasVindas(nome){
    return console.log(`Olá, ${nome}! Sejá bem-vindo(a)`);
}
let nome2 = String(prompt('Digite seu nome: '))
console.log(boasVindas(nome2));
console.log("=================================");

//Atividade 5.2
function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
    default:
      return "Operação inválida";
  }
}

let numero3 = Number(prompt("Digite o primeiro número: "));
let numero4 = Number(prompt("Digite o segundo número: "));
let operacoes = prompt("Digite um operador (+, -, *, /)");

console.log(calculadora(numero3, numero4, operacoes));
console.log("=================================");

//Atividade 5.3
function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media >= 7 ? "Aprovado" : "Reprovado";
}
let nota1 = Number(prompt('Digite a primeria nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let nota3 = Number(prompt('Digite a terceira nota: '))

console.log(calcularMedia(nota1, nota2, nota3));
console.log("=================================");

//Atividade 6.1
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = Number(prompt("Tente adivinhar o número entre 1 e 10:"));

if (numeroUsuario === numeroAleatorio) {
  console.log("Você acertou!");
} else {
  console.log(`Você errou! O número correto era ${numeroAleatorio}.`);
}
console.log("=================================");

//Atividade 6.2
let peso2 = Number(prompt("Digite seu peso (kg):"));
let altura2 = Number(prompt("Digite sua altura (m):"));

let imc = peso2 / (altura2 * altura2);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
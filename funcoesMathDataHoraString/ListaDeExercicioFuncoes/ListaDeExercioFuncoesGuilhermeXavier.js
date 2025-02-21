var prompt = require('prompt-sync')();
//1. Funções matemáticas
//Exercicio 1
console.log(Math.round(Math.random()*100)+1);

//Exercicio 2
function RaizQuadrada(num){
    return Math.sqrt(num)
}
var numero = Number(prompt("Digite o número para ver sua raiz: "))
console.log(RaizQuadrada(numero));

//Exercicio 3
function Maior(num1, num2){
    console.log("O maior número destes 2 é:",Math.max(num1, num2)); 
} 
var numero1 = Number(prompt("Digite o primeiro número: "));
var numero2 = Number(prompt("Digite o  segundo númeroa: "));

console.log(Maior(numero1, numero2));

//Exercicio 4
var numero3 = parseFloat(prompt("Digite um número com casa decimais: "))
console.log(`O número ${numero3} arredondado para cima é ${Math.ceil(numero3)}`);
console.log(`O número ${numero3} arredondado para baixo é ${Math.floor(numero3)}`);
console.log(`O número ${numero3} arredondado para o número inteiro mais próximo é ${Math.round(numero3)}`);

//2. Manipulação de Datas e Horas

//Exercicio 5
var data = new Date();
var hora = new Date();
console.log(`Hoje é ${data.toLocaleDateString()} e agora são ${hora.toLocaleTimeString()}`);

//Exercicio 6
data1 = new Date(prompt("Digite o sua data de nascimento (formato[aaaa-mm-dd]): "))
agora = new Date();
idade =agora-data1;
idade = idade / (1000*60*60*24*365);
console.log(`A sua idade é: ${idade}`);

//Exercio 7

//Tipos de dados

var nome = "Guilherme" //String
var idade = 16 //Number
var nota = 9.5 //Number
var data //Undefineed
var aprovado = true //Boolean
var diploma = null //Null

//Variáveis e Constantes (var/let/const)
var nota1=5 //declarar
nota1=7 //redefini
var nota1 = 10 //redeclarar

let nota2 = 8 //declarar
nota2 = 9 //redefinindo
//let nota2 = 10 //erro - redeclarar

const media = 7.5 //declarar
//media = 8 //erro - nao posso redefinir
//const media = 9 // erro - redeclarar

//Operadores Aritméticos
let a = 3 = 10
let b = 3
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Operadores Relacionais
console.log(5<10)//true
console.log("10"==10)//true
console.log("10"===10)//false

//Operadores Lógicos(and/or/no)
var nota3 = 5
var nota4 = 7

console.log(nota3>=7 || nota4>=7) //true
console.log(nota3>=7 && nota4>=7) //false
console.log(!true)

//Condicionais if & else, switch case
var idade = 25

if(idade>=18){
    console.log('Maior de idade')
}
else{
    console.log("Menor de idade")
}

var mes = 2

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    default:
        console.log("Outro Mês");
        break;
}

//loops (for/while/Do-While)
for (let i = 0; i < 5; i++) {
    console.log("iteração ", i);
}

var condicion = true
var numero = 3
var contador = 0
while(condicion){
    let sorteio = Math.random(5)
    contardo ++;
    if(numero==sorteio){
        console.log("Acertou com ", contador, " tentativas");
        condicion = false;
    }
}

//Funções - function

function saudacao(nome) { 
    return "Olá ", nome
}
console.log(saudacao(nome));

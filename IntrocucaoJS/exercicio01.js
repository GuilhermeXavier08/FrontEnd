var prompt = require('prompt-sync')();
//Criar contador 1 a 100
var numero = 1;
for(let i = 1; i<=100; i++){
    console.log("Contador: ", i);
}

//par ou impar
var numero;
numero = Number(prompt("Digite o número desejado: "))
if(numero % 2 === 0){
    console.log("O número é par!");
}
else{
    console.log("O número é ímpar");
}
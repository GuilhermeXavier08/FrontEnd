var prompt = require('prompt-sync')();
function MenorOuMaior(age, name){
    
    if(age>=60){
        return `O(a) ${name} tem ${age} anos, sendo assim, ele(a) é idoso`;
    }
    else if(age>=18){
        return `O(a) ${name} tem ${age} anos, sendo assim, ele(a) é adulto!`;
    }
    else{
        return `O(a) ${name} tem ${age} anos, sendo assim, ele(a) é menor de idade!`;
    }
}
console.log("\n");
var nome = prompt("Digite o nome da pessoa: ");
var idade = Number(prompt("Digite a idade da pessoa: "));
console.log(MenorOuMaior(idade, nome));
console.log("\n");
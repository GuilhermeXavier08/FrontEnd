var prompt = require('prompt-sync')();
function Tabuada(final, num, contagem=0){
    var i;
    for(i=0;i<=final-1; i++){
        contagem++;
        console.log(`${num} x ${contagem} = ${num * contagem}`);       
    }
}
var numero = Number(prompt("Qual o numero você quer ver a tabuada?: "));
var finale = Number(prompt("Até que número você quer que eu multiplique?: "));
console.log(Tabuada(finale,numero));
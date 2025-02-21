var prompt = require("prompt-sync")();
function Imprimir(contagem=0, final) {
    var i;
    for (i=0; i <= final; i+=2) {
    contagem++;
    console.log(`${contagem}º número: ${i}`);
  }
}
var cont=0;
var finale = Number(prompt("Até qual número você quer ver os números pares?: "))
console.log(Imprimir(cont,finale));
//Array e Matrízes

//Array
let numeros = [1,2,3,4,5,6,7,8,9];
console.log(numeros[8]);

let texto = ["cachorro", "bola", "sapato", "prédio"];
let mista = ["gato", 2, true];

console.log(texto[1]);
console.log(mista[2]);

//tamanho do array (lenght)
console.log(texto.length);

//adicionar elementos em um array ou alterar

//adicionar

//comeco (unshift)
texto.unshift("pão");
console.log(texto);

//fim (push)
texto.push("jogo");
console.log(texto);

//remove do começo(shift)
texto.shift();
console.log(texto);

//remove do final(pop)
texto.pop();
console.log(texto);

//alteração de valores
texto[2] = "Tênis";
console.log(texto);

//percorrer um array já pronto (for//foreach)
for(let i=0;i<=numeros.length;i++){
    console.log(`Numeros da posição ${i}: ${numeros[i]}`);
}
texto.forEach(t => {
    console.log(t);
});

//atividade
let lista = [];
for(j=0;j<=100;j++){
    lista.push(j);
}
console.log(lista);

//retorna o indice
console.log(texto.indexOf("Tênis"));

//remover elemento de uma posição específica
texto.splice(2,1); //posição,qntd de vez q vai deletar
console.log(texto);

//Operações avançadas de arrays

let valores = [10,20,30,40,50];

//map
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter
let parteValores = valores.filter(x=>x>20);
console.log(parteValores);

console.log("=====================");

//atividade filtro e map
let menor = valores.filter(x=>x<35).map(x=>x*2);
console.log(menor);

//reduce, x=acumulador, y=valor atual
let soma = valores.reduce((x,y)=>(x+y),0);

//sort

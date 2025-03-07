//Exercicio 1 - Exibir no console

let titulo = document.getElementById("titulo");
let paragrafo = document.querySelector(".paragrafo");

console.log(titulo);
console.log(paragrafo);

//Exercicio 2 - Alterar Texto

function mudarTexto(){
    titulo.innerText = "Novo Titulo";
    paragrafo.innerText = "Novo Parágrafo";
}

//Exercicio 3 - ALterar Estilos

function mudarFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
}

//Exercicio 4 - Adicionar uma classe ao elemento

function adicionarClasse(){
    titulo.classList.add("descricao");
    document.querySelector(".descricao").style.color = "red"
}
let contador = 0; //variável para o contador

function atualizar() {
    document.getElementById("contador").innerText = contador;
} //função para atualizar o contador na tela do usuário

function aumentar(){
    contador += 1;
    atualizar();
} //função para aumentar o contador

function diminuir(){
    contador -= 1;
    atualizar();
} //função para diminuir o contador

function zerar(){
    contador = 0;
    atualizar();
} //função para zerar o contador

document.addEventListener("DOMContentLoaded", atualizar); //faz o contador começar já na tela do usuário
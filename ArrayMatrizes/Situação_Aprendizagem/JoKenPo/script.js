let escolha = 0; //variável de escolha para o usuário
let resultado = document.getElementById("resultado").innerText = "Escolha uma das opções";
let escolhaAdversario = 0; //variável de escolha para a máquina
//variáveis da imagem que o jogador escolher (escolha)
let voce = document.getElementById("voce");
let maquina = document.getElementById("maquina");
//contadores para estatísticas
let vitoria = 0;
let derrota = 0;
let empate = 0;

//funções para determinar a escolha do usuário
function pedra() {
    escolha = 1;
    jogo();
}

function papel() {
    escolha = 2;
    jogo();
}

function tesoura() {
    escolha = 3;
    jogo();
}

function reiniciar() {
    //seta todas as variáveis para 0
    escolha = 0;
    vitoria = 0;
    derrota = 0;
    empate = 0;
    // Limpar todas as imagens
    voce.src = "";
    maquina.src = "";
    // Limpa todos os textos
    document.getElementById("escolhaInimiga").innerText = "";
    document.getElementById("resultado").innerText = "";
    document.getElementById("vitorias").innerText = `Vitórias: ${vitoria}`;
    document.getElementById("derrotas").innerText = `Derrotas: ${derrota}`;
    document.getElementById("empates").innerText = `Empates: ${empate}`;
}

//função para começar o jogo
function jogo() {
    if (escolha != 0) {
        escolhaAdversario = Math.floor(Math.random() * 3) + 1; //determina a escolha da máquina caso o jogador tenha feito a escolha
    }
    else {
        escolhaAdversario = 0;
    }

    //determina o texto a ser mostrado baseado na escolha do usuário
    let escolhaTexto = "";
    if (escolhaAdversario === 1) {
        escolhaTexto = "Pedra";
    } 
    else if (escolhaAdversario === 2) {
        escolhaTexto = "Papel";
    } 
    else if (escolhaAdversario === 3) {
        escolhaTexto = "Tesoura";
    } 
    //seta todos as variáveis em imagens para vazias ou zero
    else if (escolhaAdversario === 0) {
        escolhaTexto = "";
        resultado = document.getElementById("resultado").innerText = "";
        voce.src = "";
        maquina.src = "";
        empate = 0;
        vitoria = 0;
        derrota = 0;
    }
    document.getElementById("escolhaInimiga").innerText = `Escolha do adversário: ${escolhaTexto}`;

    //todas as opções de vitórias, derrotas e empates, determina a imagem a ser mostrada ao usuário e atualiza as estatísticas do jogo
    if (escolha == 1 && escolhaAdversario == 1) {
        resultado = document.getElementById("resultado").innerText = "Empate";
        voce.src = "img/pedra.png";
        maquina.src = "img/pedra.png";
        empate++;
        document.getElementById("empates").innerText = `Empates: ${empate}`;
    }
    else if (escolha == 1 && escolhaAdversario == 2) {
        resultado = document.getElementById("resultado").innerText = "Você Perdeu";
        voce.src = "img/pedra.png";
        maquina.src = "img/papel.png";
        derrota++;
        document.getElementById("derrotas").innerText = `Derrotas: ${derrota}`;
    }
    else if (escolha == 1 && escolhaAdversario == 3) {
        resultado = document.getElementById("resultado").innerText = "Você Ganhou";
        voce.src = "img/pedra.png";
        maquina.src = "img/tesoura.png";
        vitoria++;
        document.getElementById("vitorias").innerText = `Vitórias: ${vitoria}`;
    }
    else if (escolha == 2 && escolhaAdversario == 1) {
        resultado = document.getElementById("resultado").innerText = "Você Ganhou";
        voce.src = "img/papel.png";
        maquina.src = "img/pedra.png";
        vitoria++;
        document.getElementById("vitorias").innerText = `Vitórias: ${vitoria}`;
    }
    else if (escolha == 2 && escolhaAdversario == 2) {
        resultado = document.getElementById("resultado").innerText = "Empate";
        voce.src = "img/papel.png";
        maquina.src = "img/papel.png";
        empate++;
        document.getElementById("empates").innerText = `Empates: ${empate}`;
    }
    else if (escolha == 2 && escolhaAdversario == 3) {
        resultado = document.getElementById("resultado").innerText = "Você Perdeu";
        voce.src = "img/papel.png";
        maquina.src = "img/tesoura.png";
        derrota++;
        document.getElementById("derrotas").innerText = `Derrotas: ${derrota}`;
    }
    else if (escolha == 3 && escolhaAdversario == 1) {
        resultado = document.getElementById("resultado").innerText = "Você Perdeu";
        voce.src = "img/tesoura.png";
        maquina.src = "img/pedra.png";
        derrota++;
        document.getElementById("derrotas").innerText = `Derrotas: ${derrota}`;
    }
    else if (escolha == 3 && escolhaAdversario == 2) {
        resultado = document.getElementById("resultado").innerText = "Você Ganhou";
        voce.src = "img/tesoura.png";
        maquina.src = "img/papel.png";
        vitoria++;
        document.getElementById("vitorias").innerText = `Vitórias: ${vitoria}`;
    }
    else if (escolha == 3 && escolhaAdversario == 3) {
        resultado = document.getElementById("resultado").innerText = "Empate";
        voce.src = "img/tesoura.png";
        maquina.src = "img/tesoura.png";
        empate++;
        document.getElementById("empates").innerText = `Empates: ${empate}`;
    }
}
//eventos para informações já começarem na inteface do usuário
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("vitorias").innerText = `Vitórias: ${vitoria}`;
    document.getElementById("derrotas").innerText = `Derrotas: ${derrota}`;
    document.getElementById("empates").innerText = `Empates: ${empate}`;
    jogo();
});
document.addEventListener("DOMContentLoaded", jogo);
let lampada = document.getElementById("lampada");
let quebrada = false; //verifica se a lâmpada está quebrada
let contador = 0; //contador para quebrar a lâmpada automáticamente
let acesa = false; //verificador se a lâmpada está acesa para atualizar o contador

function acender() {
  if (!quebrada) {
    lampada.src = "img/lampada-acesa.png";

    if (!acesa) {
      contador += 1;
      acesa = true;
    } //condição para aumentar o contador

    if (contador === 5) {
      quebrar();
    } //condição para quebrar a lâmpada automáticamente
  }
}

function apagar() {
  if (!quebrada) {
    lampada.src = "img/lampada-apagada.png";
    acesa = false;
  }
} //função para apagar a lâmpada

function quebrar() {
  lampada.src = "img/lampada-quebrada.png";
  quebrada = true;
} //função para quebrar a lâmpada

function trocar() {
  if (quebrada) {
    lampada.src = "img/lampada-apagada.png";
    quebrada = false;
    contador = 0; //seta o contador de volta para 0
    acesa = false;
  }
} //função para trocar a lâmpada
let lampada = document.getElementById("lampada");  // Obtém o elemento HTML da lâmpada pelo seu ID
let quebrada = false; // Verifica se a lâmpada está quebrada (inicia como falsa)
let contador = 0; // Contador para controlar o número de vezes que a lâmpada é acesa
let acesa = false; // Verifica se a lâmpada está acesa (inicia como falsa)

function acender() {
  // Função que acende a lâmpada
  if (!quebrada) { // Verifica se a lâmpada não está quebrada
    lampada.src = "img/lampada-acesa.png"; // Muda a imagem da lâmpada para a imagem acesa

    if (!acesa) { // Se a lâmpada não está acesa
      contador += 1; // Aumenta o contador de vezes que a lâmpada foi acesa
      acesa = true; // Marca a lâmpada como acesa
    }

    if (contador === 5) { // Se o contador chega a 5, significa que a lâmpada foi acesa 5 vezes
      quebrar(); // Chama a função quebrar
    }
  } 
}

function apagar() {
  // Função para apagar a lâmpada
  if (!quebrada) { // Verifica se a lâmpada não está quebrada
    lampada.src = "img/lampada-apagada.png"; // Muda a imagem da lâmpada para a imagem apagada
    acesa = false; // Marca a lâmpada como apagada
  }
}

function quebrar() {
  // Função para quebrar a lâmpada
  lampada.src = "img/lampada-quebrada.png"; // Muda a imagem da lâmpada para a imagem quebrada
  quebrada = true; // Marca a lâmpada como quebrada
}

function trocar() {
  // Função para trocar a lâmpada após quebrada
  if (quebrada) { // Verifica se a lâmpada está quebrada
    lampada.src = "img/lampada-apagada.png"; // Muda a imagem da lâmpada para a apagada
    quebrada = false; // Marca a lâmpada como não quebrada
    contador = 0; // Zera o contador (pois a lâmpada foi trocada)
    acesa = false; // Marca a lâmpada como apagada
  }
}
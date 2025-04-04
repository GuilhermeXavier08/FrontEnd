//Atividade 1: Criar uma classe representando um produto
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
  exibirInfo() {
    console.log(
      `Produto: Nome: ${this.nome}, Preço: ${this.preco}, Estoque: ${this.estoque}`
    );
  }
  vender(quantidade) {
    if (quantidade > this.estoque) {
      console.log(
        `Estoque insuficiente. Quantidade disponível: ${this.estoque}`
      );
      return;
    }
    this.estoque -= quantidade;
    console.log(
      `${quantidade} ${
        quantidade === 1 ? "Unidade" : "Unidades"
      } vendida(s). Estoque restanete: ${this.estoque}`
    );
  }
  repor(quantidade) {
    this.estoque += quantidade;
    console.log(`${quantidade} itens adicionados ao estoque. Estoque atual: ${this.estoque}`);
    return;
  }
}

let produto1 = new Produto("Amaciante", 12.99, 34);
produto1.exibirInfo();
produto1.vender(2);
let produto2 = new Produto("Cereal", 23.99, 0);
produto2.exibirInfo();
produto2.vender(2);
produto2.repor(5);
produto2.exibirInfo();

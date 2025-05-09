import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styles: [
  ]
})
export class ProdutoFormComponent {
  nome = "";
  preco = 0;
  constructor(private dadosService: DadosService){}
  adicionarProduto(){
    const produto = new Produto(this.dadosService.getProduto.length, this.nome, this.preco);
    this.dadosService.adicionarProduto(produto);
    this.nome = "";
    this.preco = 0;
  }
}

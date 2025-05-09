import { Component } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styles: [
  ]
})
export class PedidoListComponent {
  pedidos: Pedido[];
  constructor(private dadosService: DadosService){
    this.pedidos = this.dadosService.getPedido();
  }
  total(pedido: Pedido) : number{
    return pedido.calcularTotal();
  }
}

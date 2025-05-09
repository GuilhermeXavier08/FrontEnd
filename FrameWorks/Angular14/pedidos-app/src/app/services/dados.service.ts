import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produto.model';
import { Pedido } from '../models/pedido.model';
@Injectable({
  providedIn: 'root'
})
export class DadosService { //controlle = Model => Visual
  private clientes: Cliente[] = [];
  private produtos: Produto[] = [];
  private pedidos: Pedido[] = [];

  constructor() { }

  getCliente(): Cliente[]{
    return this.clientes;
  }
  getProduto(): Produto[]{
    return this.produtos;
  }
  getPedido(): Pedido[]{
    return this.pedidos;
  }
  adicionarCliente(cliente: Cliente):void{
    this.clientes.push(cliente)
  }
  adicionarProduto(produto: Produto):void{
    this.produtos.push(produto)
  }
  adicionarPedido(pedido: Pedido):void{
    this.pedidos.push(pedido)
  }
}

//criar classes

class Clientes {
    constructor(id, nome) {
        this.id = id
        this.nome = nome
    }
}

class Produto{
    constructor(id, nome, preco){
        this.nome = nome
        this.id = id
        this.preco = preco
    }
}

class Pedido {
  constructor(id, cliente, itens, descontos) {
    this.id = id;
    this.cliente = cliente;
    this.itens = itens;
    this.descontos = descontos;
    this.total = this.calcularTotal();
  }
    calcularTotal(){
        let total = this.itens.reduce((acc,item)=>
        acc+(item.produto.preco * item.quantidade),0);
        return total - (total*(this.desconto/100));
    } 
}

class SistemaPedidos{
    constructor(){
        this.clientes = []
        this.produtos = []
        this.pedidos = []
    }
    castrarCliente(){
        const nome = document.getElementById("clienteNome").value
        if(!nome) return alert("Digite um nome para o cliente")
        const cliente = new Clientes(this.clientes.length+1, nome);
        this.clientes.push(cliente)
    }
    cadastrarProduto(){
        const nome = document.getElementById("produtoNome").value
        const preco = parseFloat(document.getElementById("produtoPreco").value)
        if(!nome || !preco) return alert("Preencha todos os campos do produto");
        const produto = new Produto(this.produtos.length+1, nome, preco)
        this.produtos.push(produto);
    }
    atualizarClientes(){
        const lista = document.getElementById("listaClientes")
        lista.innerHTML = "";
        const selectCliente =  document.getElementById("selectCliente")
        selectCliente.innerHTML = '<option value="">Selecione um Cliente</option>'
        this.clientes.forEach(cliente => {
            const li = document.createElement("li")
            li.innerText = cliente.nome;
        })
    }
}

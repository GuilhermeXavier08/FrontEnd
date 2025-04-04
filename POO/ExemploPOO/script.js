//criando a classe carro
class Carro{
    //nao tem atributos diretos

    //construtor -> define os atributos da classe
    constructor(marca, modelo, ano, cor, preco){
        this.marca /*atributo*/ = marca //parametro do método
        this.modelo = modelo 
        this.ano = ano
        this.cor = cor
        this.preco = preco
    }

    //método
    exibirInfo(){
        console.log(`Carro: ${this.marca}, ${this.modelo}, ${this.ano}, ${this.cor}, R$${this.preco}`);
    }
}

//criar Objetos da classe Carro
let carro1 = new Carro("FIAT", "Uno", 1994, "Cinza", 8000.00)
carro1.exibirInfo()
let carro2 = new Carro("GM", "Corsa", 2011, "Preto", 20000.00)
carro2.exibirInfo()

//atributos privados e publicos

class Usuarios{
    #nome
    #senha
    constructor(nome, senha){
        this.#nome = nome
        this.#senha = senha
    }
    //métodos privado
    #trocarSenha(novaSenha){
        this.#senha = novaSenha
    }
}
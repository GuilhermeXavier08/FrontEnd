import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
})
export class FormUsuarioComponent {
  //atributos
  nome: string = '';
  email: string = '';
  telefone: string = '';
  genero: string = '';
  idade: number | null = null;
  profissao: string = '';

  //métodos
  limparDados() {
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.genero = '';
    this.idade = null;
    this.profissao = '';
  }
  validarFormulário(): string[] {
    const erros: string[] = [];
    if(!this.nome.trim()) {
      erros.push("O nome é obrigatório.");
    }
    if(!this.email.trim()){
      erros.push("O email é obrigatório!")
    }else if(!this.email.includes("@")){
      erros.push("Email inválido")
    }
    return erros;
  }
  enviarFormulario(){
    const erros = this.validarFormulário();
    if (erros.length>0) {
      alert("Erros no formulário: \n"+ erros.join("\n"))
      return;
    }
    this.limparDados();
    alert("Formulário enviado com sucesso")
    alert("")
  }
}

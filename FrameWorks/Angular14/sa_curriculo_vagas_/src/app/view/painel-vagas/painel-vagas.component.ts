import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit{
  public vaga: Vaga = new Vaga(0,"","","",0);
  public vagas: Vaga[] = [];
  constructor(private _vagasService: VagaService){}
  ngOnInit(): void {
    this.listarVagas();
  }
  listarVagas(){
    this._vagasService.getVagas().subscribe(
      (retornoVaga) => {this.vagas = retornoVaga.map(
        (item)=> Vaga.fromMap(item)
      )}
    );
  }

  listarVagaUnica(vaga: Vaga){
    this.vaga = vaga
  }

  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();
      },
      (err) => {console.error("Erro ao cadastrar", err)}
    )
  }

  atualizar(id:number){
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0,"","","",0)
        this.listarVagas()
      },
      (err) => {console.error("Erro ao atualizar", err);}
    )
  }

  excluir(id:number){
    this._vagasService.removerVaga(id).subscribe(
      () => {
        this.listarVagas();
      },
      (err) => {console.error("Erro ao deletar", err);}
    )
  }
}

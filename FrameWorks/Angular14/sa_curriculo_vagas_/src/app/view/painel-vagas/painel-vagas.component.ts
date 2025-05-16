import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  public vaga: Vaga = new Vaga(0, '', '', '', 0);
  //ratrear os dados da API
  public vagas: Vaga[] = [];
  // armazenar as vagas da api
  constructor(private _vagasService: VagaService) {}
  // estabelece o serviço da busca no servidor
  ngOnInit(): void {
    this.listarVagas();
  }
  listarVagas() {
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {
        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }

  // lista apenas uma vaga //put
  listarVagaUnica(vaga: Vaga){
    this.vaga = vaga;
  }

  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();
      },
      (err) => {
        console.error("Erro ao cadastrar", err);
      }
    )
  }

  atualizar(id: number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();
      },
      (err) => {
        console.error("Erro ao Atualizar", err);
      }
    )
  }

  excluir(id:number){
    this._vagasService.removerVaga(id).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (err) => {
        console.error('Erro ao Excluir', err);
      }
    );
  }
}

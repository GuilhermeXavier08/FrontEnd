import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss'],
})
export class PainelCurriculosComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo(0, '', 0, '', '');
  public curriculos: Curriculo[] = [];
  constructor(private _curriculosService: CurriculoService) {}
  ngOnInit(): void {
    this.listarCurriculos();
  }
  listarCurriculos() {
    this._curriculosService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => Curriculo.fromMap(item));
    });
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  cadastrar() {
    this._curriculosService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '');
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao cadastrar', err);
      }
    );
  }

  atualizar(id: number) {
    this._curriculosService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '');
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao atualizar', err);
      }
    );
  }

  deletar(id: number) {
    this._curriculosService.removerCurriculo(id).subscribe(
      () => {
        this.listarCurriculos();
      },
      (err) => {console.error('Erro ao deletar', err);}
    );
  }

}

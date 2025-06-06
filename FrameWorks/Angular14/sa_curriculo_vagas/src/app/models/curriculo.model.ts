export class Curriculo {
  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public formacao: string,
    public foto: string
  ) {}

  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      idade: this.idade,
      formacao: this.formacao,
      foto: this.foto
    };
  }

  //fromMao() BD -> obj
  static fromMap(map: any): Curriculo {
    return new Curriculo(map.id, map.nome, map.idade, map.formacao, map.foto);
  }
}

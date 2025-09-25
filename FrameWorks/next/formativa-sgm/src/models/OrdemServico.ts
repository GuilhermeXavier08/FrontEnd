//classe para modelagem de dados para ordem de servico

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IOrdem extends Document {
    _id: string
    titulo: string
    descricao: string
    tipoManutencao: string
    status: string
    dataSolicitada: Date
    dataFinalizada: Date | null
    idTecnico: string
    idEquipamento: string
}

const OrdemSchema:Schema<IOrdem> = new Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    tipoManutencao: {type: String, enum: ["preventiva", "emergencial", "preditiva"], required: true},
    status: {type: String, enum: ["ativo", "inativo"], default: "ativo"},
    dataSolicitada: {type: Date, default: Date.now},
    dataFinalizada: {type: Date, default: null},
    idTecnico: {type: String, required: true},
    idEquipamento: {type: String, required: true}
})

const OrdemServico:Model<IOrdem> = mongoose.models.OrdemServico
|| mongoose.model<IOrdem>("OrdemServico", OrdemSchema)

export default OrdemServico
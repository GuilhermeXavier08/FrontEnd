//classe para modelagem de dados para equipamentos

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEquip extends Document{
    _id: string
    modelo: string
    marca: string
    localizacao: string
    status: string
    numSerie: string
}

const EquipSchema:Schema<IEquip> = new Schema({
    modelo: {type: String, required: true},
    marca: {type: String, required: true},
    localizacao: {type: String, required: true},
    numSerie: {type: String, required: true, unique: true},
    status: {type: String, enum: ["ativo", "inativo"], default: "ativo"}
})

const Equipamento: Model<IEquip> = mongoose.models.Equipamento
|| mongoose.model<IEquip>("Equipamento", EquipSchema)

export default Equipamento;
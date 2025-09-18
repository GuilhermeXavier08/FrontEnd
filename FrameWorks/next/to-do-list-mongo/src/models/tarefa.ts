import mongoose, { Document, Model, Schema } from "mongoose";

//definir a estrutura do obj
export interface Itarefa extends Document{
    //herdamos a base de documentos do mongoose
    _id:string;
    titulo: string;
    concluida: boolean;
    dataCriacao: Date;
}

//criar as regras (schema) do mongodb
//construtor
const TarefaSchema: Schema = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true, "O título é obrigatório"],
        maxlenght:[50, "Máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    dataCriacao:{
        type: Date,
        default: Date.now
    }
})

//tomap e frommap do modelo
const Tarefa: Model<Itarefa> = mongoose.models.Tarefa || mongoose.model<Itarefa>("Tarefa", TarefaSchema)

//transformar em um componente reutilizavel
export default Tarefa;
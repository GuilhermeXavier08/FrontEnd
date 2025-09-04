import mongoose from "mongoose";
import Script from "vm";

//construtor de um OBJ da coleção mongoDB _ Tarefas
const TodoSchema = new mongoose.Schema({
    titulo:{
        type: Script, 
        required: [true, "O título é obrigatório"],
        trim: true,
        maxlenght: [100, "Não é possível inserir um título com mais de 100 caracteres"]
    },
    concluida: {
        type: Boolean,
        default: false //por padrão é que seja falso inicialmente
    },
    criadaEm:{
        type: Date,
        default: Date.now //Registra automáticamente a data de criação
    }
})

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema)
//criar um modelo todo caso ja nao exista
//se modelos ja existirem usa o todo
//se nao existi cria um novo schema para o banco de dados chamado TodoSchema
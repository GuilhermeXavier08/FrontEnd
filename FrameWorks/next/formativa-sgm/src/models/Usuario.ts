//classe para modelagem de dados para usuarios

import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUsuario extends Document{
    _id: string
    nome: string
    email: string
    senha?: string
    funcao: string
    compareSenha(senhaUsuario: string):Promise<boolean>
}

const UsuarioSchema:Schema<IUsuario> = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true, select: false},
    funcao: {type: String, enum:[
        "tecnico", "gerente", "admin"
    ], required: true}
})

//middleware para hashear a senha
UsuarioSchema.pre<IUsuario>('save', async function (next) {
    if (!this.isModified('senha') || !this.senha) return next();
    try {
        const salt = await bcrypt.genSalt(10)
        this.senha = await bcrypt.hash(this.senha, salt)
        next();
    } catch (error:any) {
        next(error)
    } 
})

//metodo para comparar senhas
//quando faz o login (compara a senha digitada e criptografa com a senha criptografada do banco)
UsuarioSchema.methods.compareSenha = function (senhaUsuario:string):Promise<boolean>{
    return bcrypt.compare(senhaUsuario, this.senha)
}

//tomap // frommap

const Usuario:Model<IUsuario> = mongoose.models.User
|| mongoose.model<IUsuario>("Usuario", UsuarioSchema)

export default Usuario;
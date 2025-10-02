import Usuario, { IUsuario } from "@/models/Usuario";
import connectMongo from "@/services/mongodb"

//getall
export const getAllUsuario = async() =>{
    await connectMongo() //estabelece conexao com o bd
    const usuarios = await Usuario.find([]) //lista todos os usuarios da colecao
    return usuarios
}

//getone
export const getOneUsuario = async(id: string) =>{
    await connectMongo()
    const usuario = await Usuario.findById(id) //lista i usuario pelo ID
    return usuario
}

//create
export const createUsuario = async(data: Partial<IUsuario>) =>{
    await connectMongo()
    const novoUsuario = new Usuario(data) //cria o usuario
    const novoUsuarioId = novoUsuario.save() //salva o usuario no bd
    return novoUsuarioId
}

//update
export const updateUsuario = async(id:string, data:Partial<IUsuario>) =>{
    await connectMongo()
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {new:true})
    return usuarioAtualizado
}

//delete
export const deleteUsuario = async(id:string) =>{
    await connectMongo()
    await Usuario.findByIdAndDelete(id)
}

// metodo para a autenticacao do usuario (login) a senha e comparada
export const autenticaUsuario = async(email:string, senha:string) =>{
    await connectMongo()
    //buscar o usuario (email)
    const usuario = await Usuario.find({email}).select("+senha")
    //se o usuario nao encontrado
    if (!usuario || usuario.length == 0) return null;
    const senhaSecreta = await usuario[0].compareSenha(senha) //bool
    if (!senhaSecreta == false) return null
    //se deu certo
    return usuario[0]
}
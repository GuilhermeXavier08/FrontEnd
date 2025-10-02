import OrdemServico, { IOrdem } from "@/models/OrdemServico"
import connectMongo from "@/services/mongodb"

export const getAllOrdem = async()=>{
    await connectMongo()
    const ordens = await OrdemServico.find([])
    return ordens
}

export const getOneOrdem = async(id:string) =>{
    await connectMongo()
    const ordem = await OrdemServico.findById(id)
    return ordem
}

export const createOrdem = async(data: Partial<IOrdem>)=>{
    await connectMongo()
    const novaOrdem = new OrdemServico(data)
    const novaOrdemId = novaOrdem.save()
    return novaOrdemId
}

export const updateOrdem = async(id:string, data: Partial<IOrdem>) =>{
    await connectMongo()
    const ordemAtualizada = await OrdemServico.findByIdAndUpdate(id, data, {new:true})
    return ordemAtualizada
}

export const deleteOrdem = async(id:string) =>{
    await connectMongo()
    await OrdemServico.findByIdAndDelete(id)
}
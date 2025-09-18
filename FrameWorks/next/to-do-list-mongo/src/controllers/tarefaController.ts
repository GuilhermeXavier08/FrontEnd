//funcoes do controller (crud)

import Tarefa, { Itarefa } from "@/models/tarefa";
import connectMongo from "@/services/mongodb";

//read -> pegar as tarefas do banco e retornar em uma lista(vetor)
export const readAllTarefas = async ():Promise<Itarefa[]> =>{
    await connectMongo(); //estabelece a conexao
    const tarefas = await Tarefa.find({}) //pega todas as tarefas da colecao
    return tarefas; //retorna o vetor de tarefas
}

export async function createTarefa(data: Partial<Itarefa>): Promise<Itarefa> {
    await connectMongo();
    const tarefa = await Tarefa.create(data)
    return tarefa; //retorna a tarefa com o id
}

//update => atualiza uma tarefa ja existente
export async function updateTarefa(id: string, data:  Partial<Itarefa>):Promise<Itarefa | null> {
    await connectMongo()
    const tarefa = await Tarefa.findByIdAndUpdate(id,data);
    return tarefa;
}

//delete => deleta uma tarefa pelo ID
export const deleteTarefa = async(id:string):Promise<boolean> =>{
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id: id});
    return resultado.deletedCount>0; //se for > 0 retorna true, caso  == 0 false
}
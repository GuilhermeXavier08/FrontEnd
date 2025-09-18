//cliente-side page
"use client";

import { Itarefa } from "@/models/tarefa";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function Home() {
  //usestate => armazenamento localStorage
  //armazenar as tarefas em um vetor[armazenado, editor de armazenamento]
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);

  //armazenamento de uma string para o input (titulo da tarefa)
  const [novaTarefa, setNovaTarefa] = useState<string>("")

  //useEffect => permite a execucao de funcoes sem o recarregamento da tela
  useEffect(() => {
    //carregar todas as tarefas do banco de dados
    buscarTarefas();
  }, [])

  //criar as funcoes que serao executadas na tela
  const buscarTarefas = async () => {
    try {
      //fetch => metodo get e padrao nao precisa declarar
      const resposta = await fetch("/api/tarefas") //conecta com o route.ts
      //realizar a conexao http com o backend
      const data = await resposta.json() //converte em json
      if (data.success) {
        setTarefas(data.data) //armazena a resposta no vetor de tarefas
      }
    } catch (error) {
      console.error(error); //exibe o erro no console
    }
  }

  const adicionarTarefa = async (e: FormEvent) => {
    e.preventDefault(); //evita o recarregamento da pagina em eventos html
    //verificar se o texto nao esta vazio
    if (!novaTarefa.trim()) return; //nao permite adicionar tarefas vazias no bd
    try {
      const resultado = await fetch("api/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo: novaTarefa })
      })
      const data = await resultado.json()
      if (data.success) { //se o resultado for ok
        //adicionar a tarefa no vetor
        setNovaTarefa("")
        //client-side - adiciono sem buscar a nova tarefa no bd
        setTarefas([...tarefas, data.data])
        //server-side - adiciono buscando a nova tarefa no bd
        buscarTarefas();
      }
    } catch (error) {
      console.error(error);
    }
  }

  //atualizar tarefa
  const atualizarTarefa = async(id: string, status: boolean) =>{
    try {
      const resposta = await fetch(`/api/tarefas/${id}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({concluida: !status})
      });
      const data = await resposta.json();
      if (data.success) {
        //cliente-side
        setTarefas(tarefas.map((tarefa) =>(tarefa._id === id ? data.data : tarefa)))
        //server-side
        buscarTarefas();
      }
    } catch (error) {
      console.error(error);
    }
  }
  //deletar tarefa

  //interface do usuario reactdom
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionarTarefa}>
        <input type="text" value={novaTarefa} onChange={(e: ChangeEvent<HTMLInputElement>) => setNovaTarefa(e.target.value)} placeholder="Adicionar uma nova tarefa" />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tarefas.map((tarefa)=> (
          <li key={tarefa._id.toString()}>
            <input type="checkbox" checked={tarefa.concluida} onChange={()=> atualizarTarefa(tarefa._id.toString(), tarefa.concluida)}/>
            {tarefa.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
}
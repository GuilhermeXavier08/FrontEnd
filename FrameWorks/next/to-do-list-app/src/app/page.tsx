//indicar que é um componente do Cliente Side
"use Client";

import { useEffect, useState } from "react";

export default function Home() {
  const [tarefas, setTarefas] = useState([]); //manipulador de tarefas
  const [newTarefa, SetNewTarefa] = useState(""); //manipulador de input do formulario

  //useEffect
  useEffect(()=> {fetchTarefas();},[]);
  //useEffect para preencher a lista de tarefas enquanto carrega a pagina

  //metodo para pegar todas as tarefas da colecao no mongodb
  const fetchTarefas = async () => {
    const resp = await fetch("/api/todos");
    const data = await resp.json();
    setTarefas(data.data)
  }
  async function addTarefa(){
    const resp = await fetch("/api/todos", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({title: newTarefa})
    });
    const data = await resp.json();
    setTarefas([...tarefas, data.data])
    SetNewTarefa("");
  }

  
}


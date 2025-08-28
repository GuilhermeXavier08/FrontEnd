import { useState } from "react"
import ToDoList from "./componentes/ToDoList";
import ToDoForm from "./componentes/ToDoForm";

const App = () => {
  //Lógica do componente
  const [tarefas, setTarefas] = useState([]);
  //estado para armazenamento para a lista de tarefas

  const addTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa])
    //adicionando nova tarefa ao array, ...taregas => copia todas as tarefas
    //que já estão adicionadas anteriormente
  }
  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_,i) => i !== index))
    //cria um novo vetor sem a tarefa que quero remover
    //filtro o array, removendo a posição index
  }

  //view do componentes
  return(
    <div>
      <h1>To-Do-List App</h1>
      <ToDoForm addTarefa = {addTarefa}/>
      <ToDoList tarefas={tarefas} removerTarefa={removerTarefa}/>
    </div>
  )
}

export default App;
//componente principal do meu aplicativo
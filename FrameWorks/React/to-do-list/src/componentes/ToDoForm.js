import "./ToDoForm.css"

//componente para criar o formulario

import { useState } from "react"

//função para adicionar tarefa
const ToDoForm = ({addTarefa}) => {
    //função para armazenar o valor do input -> UseState
    const[tarefa, setTarefa] = useState("")
    // definir o useState => usa a memoria local do navegador para armazenar as mudanças de estado
    //[primeiro campo armazena as tarefas, segundo armazena as mudanças de estado]

    //função para atualizar o estado com o valor do input
    //função para criar uma nova tarefa ao ser clicado o botão submit
    const handleSubmit = (e) => {
        //impedir o funcionamento do botao submit
        e.preventDefault() //não permite o recarregamento da página
        //verifica se o campo não esta vazio
        if (tarefa.trim() !== "") {
            //adicionar a tarefa ao vetor de tarefas
            addTarefa(tarefa)
            //limpa o campo do input
            setTarefa("");
        }
    }
    
    //view
    return(
        //formulario para tarefas
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Inserir Nova Tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}></input>
            <button className="btnEnviar" type="submit">Adicionar</button>
        </form>
    )
}

export default ToDoForm
//componente para criar um formulario para inserir uma nova tarefa
//pode ser reutilizado em outros componentes (export)
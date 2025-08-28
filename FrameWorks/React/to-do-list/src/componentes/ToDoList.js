import "./ToDoList.css"

const ToDoList = ({tarefas, removerTarefa}) => {
    //retorna uma de tarefas
    return(
        //lista não ordenada
        <ul>
            {/* faz o mapeamento do vetor de tarefas e para cada tarefa cria um item da lista */}
            {tarefas.map((tarefa, index) => (
                <li key={index}>
                    {tarefa}
                    <button onClick={()=> removerTarefa(index)}>Remover</button>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;
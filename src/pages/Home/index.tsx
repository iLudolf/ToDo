import { Header } from "../../components/Header"
import {
    Body,
    Container,
    InputSearch,
    ButtonSearch,
    GroupSearch,
    TaskContainer,
    TaskHeader,
    AmountTaskCreate,
    AmountTaskCompleted,
    Amount
} from "./styles"
import { Empty } from "../../components/Empty"
import { Task } from "../../components/Task"
import { useContext, useState } from "react"
import { TasksContext } from "../../contexts/TasksContext"

export const Home = () => {
    const { tasks, addTask } = useContext(TasksContext)

    const [newTaskDescription, setNewTaskDescription] = useState<string>('')

    const handleAddNewTask = () => {
        addTask(newTaskDescription)
    }

    return (
        <Container>
            <Header />
            <Body>
                <GroupSearch>
                    <InputSearch
                        placeholder="Adicione uma nova tarefa"
                        onChange={(e) => setNewTaskDescription(e.target.value)}
                    />
                    <ButtonSearch onClick={handleAddNewTask}>Criar
                        {" "} <img src="./assets/plus.png" alt="" />
                    </ButtonSearch>
                </GroupSearch>
                <TaskContainer>
                    <TaskHeader>
                        <AmountTaskCreate>
                            Tarefas criadas {' '}
                            <Amount>{tasks.length}</Amount>
                        </AmountTaskCreate>
                        <AmountTaskCompleted>
                            Concluídas {' '}
                            <Amount>{tasks.filter(task => task.concluded === true).length}</Amount>
                        </AmountTaskCompleted>
                    </TaskHeader>
                </TaskContainer>
                <>
                    {tasks.length <= 0 ? <Empty /> : tasks.map((element) => {
                        return <Task
                            key={element.id}
                            id={element.id}
                            description={element.description}
                        />
                    })}
                </>
            </Body>
        </Container>
    )
}
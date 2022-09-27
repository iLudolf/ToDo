import { useContext, useState } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import {
    Container,
    Logo
} from "./styles"

interface IProps {
    id: string;
    description: string;
}

export const Task = ({ description, id }: IProps) => {
    const { deleteTask, setConcludedTask } = useContext(TasksContext);
    const [taskIsConcluded, setTaskIsConcluded] = useState<boolean>(false)

    const handleRemoveTask = () => {
        deleteTask(id)
    }

    const handleConcludedTask = () => {
        setTaskIsConcluded(!taskIsConcluded)
        setConcludedTask(id)
    }

    return (
        <Container
            taskIsSelect={taskIsConcluded}
        >
            <input type="checkbox" onChange={handleConcludedTask}></input>
            <span>{description}</span>
            <a href="#" onClick={handleRemoveTask}>
                <Logo src="./assets/trash.png" />
            </a>
        </Container>
    )
}
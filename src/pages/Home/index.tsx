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
import { Plus } from "phosphor-react"
import { Empty } from "../../components/Empty"
import { Task } from "../../components/Task"

export const Home = () => {
    return (
        <Container>
            <Header />
            <Body>
                <GroupSearch>
                    <InputSearch
                        placeholder="Adicione uma nova tarefa"
                    />
                    <ButtonSearch >Criar
                        {" "} <img src="./assets/plus.png" alt="" />
                    </ButtonSearch>
                </GroupSearch>
                <TaskContainer>
                    <TaskHeader>
                        <AmountTaskCreate>
                            Tarefas criadas {' '}
                            <Amount>0</Amount>
                        </AmountTaskCreate>
                        <AmountTaskCompleted>
                            Concluídas {' '}
                            <Amount>0</Amount>
                        </AmountTaskCompleted>
                    </TaskHeader>
                    {/* <Empty /> */}
                </TaskContainer>
                
                <Task />
                <Task />
                <Task />
            </Body>
        </Container>
    )
}
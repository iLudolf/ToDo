import { Header } from "../../components/Header"
import { Body, Container, InputSearch, ButtonSearch, GroupSearch } from "./styles"
import {Plus, PlusCircle} from "phosphor-react"

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
                       {" "} <Plus size={15} color="#ffff"/>
                    </ButtonSearch>
                </GroupSearch>
            </Body>
        </Container>
    )
}
import {
    Container,
    Logo
} from "./styles"

export const Empty = () => {
    return (
        <Container>
            <Logo src="./assets/Clipboard.png" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </Container>
    )
}
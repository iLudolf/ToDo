import styled from "styled-components";

export const Container = styled.nav`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
font-size: 16px;
span, strong{
    font-size: 16px;
    color: ${({ theme }) => theme.gray300};
}
`

export const Logo = styled.img`
width: 56px;
height: 56px;
margin-bottom: 16px;
`;
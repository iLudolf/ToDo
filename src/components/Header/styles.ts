import styled from "styled-components";

export const Container = styled.nav`
width: 100%;
height: 200px;
background-color: ${({ theme}) => theme.gray700};
display: flex;
justify-content: center;
align-items: center;
`

export const Logo = styled.img`
width: 126px;
height: 48px;
`;
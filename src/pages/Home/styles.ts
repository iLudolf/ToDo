import styled from "styled-components";

export const Container = styled.nav`
width: 100%;
height: 100vh;
`

export const Body = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
padding-left: 352px;
padding-right: 352px;
`

export const InputSearch = styled.input`
flex: 4;
width: 100%;
padding: 16px;
border-radius: 8px;
border: none;
border: 2px solid transparent;
&:focus{
    border: 2px solid ${({ theme}) => theme.blue};
}
margin-right: 8px;
`

export const ButtonSearch = styled.button`
flex: 1;
width: 736px;
height: 54px;
border-radius: 8px;
background-color: ${({ theme}) => theme.blue};
border: none;
align-items: center;
`

export const GroupSearch = styled.div`
display: flex;
flex-direction: row;
align-items: center;
transform: translatey(-50%);
`
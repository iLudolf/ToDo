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
    border: 2px solid ${({ theme }) => theme.blue};
}
margin-right: 8px;
`

export const ButtonSearch = styled.button`
flex: 1;
width: 736px;
height: 54px;
border-radius: 8px;
background-color: ${({ theme }) => theme.blueDark};
border: none;
display: flex;
justify-content: space-evenly;
align-items: center;
color: ${({ theme }) => theme.gray100};

&:hover{
    background-color: ${({ theme }) => theme.blue};
}
cursor: pointer;
`

export const GroupSearch = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
transform: translatey(-50%);
margin-bottom: 64px;
`

export const TaskContainer = styled.div`
`;

export const TaskHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
`
export const AmountTaskCreate = styled.span`
color: ${({ theme }) => theme.blue};
`
export const AmountTaskCompleted = styled.span`
color: ${({ theme }) => theme.purple};
`

export const Amount = styled.span`
width: 25px;
height: 19px;
background-color:  ${({ theme }) => theme.gray400};
padding: 2px 10px;
border-radius: 99%;
color:  ${({ theme }) => theme.gray200};
`
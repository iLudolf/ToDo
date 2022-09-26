import styled from "styled-components";

export const Container = styled.nav`
border: 1px solid transparent;
padding: 16px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
font-size: 16px;
background-color:  ${({ theme }) => theme.gray500};
border-radius: 8px;
color:  ${({ theme }) => theme.gray300};
margin-bottom: 16px;

span{
    margin: 0;
    padding: 0;
    text-align: start;
}

input{
    margin-left: 12px;
    margin-right: 12px;
}

input { 
  height: 25px;
  width: 25px;
  background-color: #eee;
}

:hover{
    border: 1px solid  ${({ theme }) => theme.blue};
}

[type=checkbox]{
    width: 24px;
    height: 24px;
    border-radius: 999999px;
    background-color: red;
}

`
export const Logo = styled.img`
width: 24px;
height: 24px;
margin-bottom: 16px;
`;

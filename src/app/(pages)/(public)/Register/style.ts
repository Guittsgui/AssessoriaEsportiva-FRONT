import styled from "styled-components";

export const PageContainer = styled.div`

    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:50px;
    h1{
        border-bottom: 2px solid black;
        padding-bottom: 5px;
        color: ${({theme}) => theme.main};
        border-color: ${({theme}) => theme.main};
    }
    
`

export const Form = styled.form` 
    border: 2px solid black;
    box-shadow: 2px 2px 2px gray;
    border-radius: 20px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`
import styled from "styled-components";

export const PageContainer = styled.div`

    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    h1{
        border-bottom: 2px solid black;
        padding-bottom: 5px;
    }
    
`

export const Form = styled.form`
    width: 500px;
    height: 300px;
    border: 2px solid black;
    box-shadow: 2px 2px 2px gray;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

`
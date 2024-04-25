import styled from "styled-components";

export const Form = styled.form`
    padding: 40px 50px;
    border: 2px solid ;
    border-color: ${({theme}) => theme.main};
    box-shadow: 2px 2px 2px gray;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px; 
`
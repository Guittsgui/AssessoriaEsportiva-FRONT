import styled from "styled-components";

export const Button = styled.button`
    height: 35px;
    width: 300px;
    border-radius: 20px;
    border: 1px solid ;
    border-color: ${props=> props.theme.main};
    color: ${props => props.theme.main};
    font-size: 15px;

    &:hover{
        opacity: 70%;
    }
`
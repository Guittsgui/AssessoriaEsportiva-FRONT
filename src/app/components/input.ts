import styled from "styled-components";

type props = {
    hasErrors?: any;
}

export const Input = styled.input<props>`
    width: 400px;
    height: 35px;
    outline: none;
    border-radius: 20px;
    border: 2px solid black;
    padding-left: 20px;
    border-color: ${props => props.hasErrors ? `${props.theme.danger}` : `${props.theme.main}`};
    &::placeholder{
        color: ${props => props.hasErrors ? `${props.theme.danger}` : `${props.theme.main}`};
    }


`
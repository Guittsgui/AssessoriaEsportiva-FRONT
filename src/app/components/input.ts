import styled from "styled-components";

type props = {
    hasErrors?: any;
}

export const Input = styled.input<props>`
    width: 400px;
    height: 35px;
    outline: none;
    border-radius: 20px;
    border: 1px solid black;
    padding-left: 20px;
    border-color: ${props => props.hasErrors ? 'red' : 'black'};

    &::placeholder{
        color: ${props => props.hasErrors ? 'red' : 'black'};
    }


`
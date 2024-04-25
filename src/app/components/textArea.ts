import styled from "styled-components";

type props = {
    hasErrors: any
}

export const TextArea = styled.textarea<props>`
        resize: none;
        outline: none;
        width: 400px;
        height: 200px;
        border-radius: 20px;
        box-shadow: 1px 1px 1px gray;
        padding: 15px;
        border: 2px solid;
        border-color: ${props => props.hasErrors ? `${props.theme.danger}` : `${props.theme.main}`};
        &::placeholder{
            color: ${props => props.hasErrors ? `${props.theme.danger}` : `${props.theme.main}`};
        }

`
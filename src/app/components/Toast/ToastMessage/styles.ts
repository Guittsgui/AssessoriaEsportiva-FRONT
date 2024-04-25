import styled from "styled-components";

type props = {
    type: string
}

export const Container = styled.div<props>`
    font-size: 18px;
    color: white;
    padding: 16px 64px;
    background-color: ${props => props.type === "error" ? `${props.theme.danger}` : `${props.theme.success}`};
    border-radius: 20px;
    box-shadow: 2px 2px 2px gray;
    margin-bottom: 20px;
    font-weight: bold;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    cursor: pointer;
    &:hover{
        opacity: 90%;
    }
`
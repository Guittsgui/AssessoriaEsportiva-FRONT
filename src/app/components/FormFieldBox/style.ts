import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    span{
        padding-left: 15px;
    }
    p{
        color: ${props => props.theme.danger};
        font-weight: bolder;
        font-size: 12px;
        padding-left: 20px;
    }

    div{
        height: 18px;
        display:flex;
        align-items: center;
    }

`
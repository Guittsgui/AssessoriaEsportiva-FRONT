import styled from "styled-components";

export const Container = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-shadow: 2px 2px 2px black;
    &:hover{
        opacity: 80%
    }

    span{
        font-style: italic;
        font-weight: bolder;
        font-size: 40px;
        color: ${({theme}) => theme.hightlight};
    }

    p{
        font-size: 30px;
    }
    small{
        font-size: 20px;
        border-bottom: 2px solid ;
        border-color: ${({theme}) => theme.hightlight};
        padding-bottom: 5px;
    }
`
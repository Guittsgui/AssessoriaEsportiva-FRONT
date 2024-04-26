import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    h3{
        font-size: 30px;
        padding-bottom: 20px;
        color: ${({theme}) => theme.main2}
    }

    .title{
        border-bottom: 2px solid;
        border-color: ${({theme}) => theme.hightlight};
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: center;
    }
`

export const SingleSportsContainer = styled.div`
    display: flex;
    padding: 20px;
    gap: 40px;
`
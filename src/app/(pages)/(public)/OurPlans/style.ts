import styled from "styled-components";

export const Container = styled.div` 
    padding: 40px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    h1{
        border-bottom: 2px solid black;
        padding-bottom: 5px;
    }

`

export const TextContainer = styled.div`
    width: 700px;
    .title{
        border-bottom: 2px solid ;
        border-color: ${({theme}) => theme.hightlight};
        padding: 10px;
    }  
    h2{
        font-size: 40px;
        color: ${({theme}) => theme.main};
        text-align:center;
    }
    p{
        margin: 15px;
        font-size: 18px;
        font-style: italic;
        color: gray;
    }
    a{
        color: ${({theme}) => theme.hightlight};
        &:hover{
            opacity: 70%;
            text-decoration: underline;
        }
    }

`

export const Nav = styled.nav`
    width: 800px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
    border: 2px solid;
    border-color: ${({theme}) => theme.main2};
    border-radius: 20px;
    box-shadow: 4px 4px 4px lightgray;

    button{
        border: 0;
        background-color: transparent;
        font-size: 20px;
        cursor: pointer;
        font-weight: bolder;
        color: ${({theme}) => theme.main};
        font-style: italic;
        &:hover{
            border-bottom: 2px solid ;
            border-color: ${({theme}) => theme.hightlight};
            padding-bottom: 5px;
            color: ${({theme}) => theme.hightlight};
        }
    }

    .active{
        border-bottom: 2px solid ;
        border-color: ${({theme}) => theme.hightlight};
        padding-bottom: 5px;
        color: ${({theme}) => theme.hightlight};
    }
`
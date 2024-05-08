import styled from "styled-components";

export const Container = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px ;
    h1{
        color: ${({theme}) => theme.main2};
        text-shadow: 1px 1px 1px lightgray;
        border-bottom: 2px solid ${({theme}) => theme.hightlight};
        font-style: italic;      
    }
`
export const MainContainer = styled.div`
    display: flex;
    gap: 60px;
    padding: 30px;
`

export const ProductsResume = styled.div`

`

export const OrderResume = styled.div`

`

export const OrderInfos = styled.div`
    border: 2px solid lightgray;
    box-shadow: 2px 2px 2px lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    div{
        width: 100%
    }
    .title{
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid lightgray;
    }
    .separate{
        height: 60px;
        border-bottom: 2px solid lightgray;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .total{
        border: none;
        font-weight: bolder;
        font-style: italic;
    }

    .cupom{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 50px;
        width: 100%;

        .form{
            display:flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }
        input{
            color: black;
            height: 30px;
            outline: none;
            padding-left: 5px;
            border: 1px solid ${({theme}) => theme.main};
        }
        button{
            width: 70px;
            height: 30px;
            border: 1px solid ${({theme}) => theme.main3};
            color: ${({theme}) => theme.hightlight};
            background-color: transparent;
            box-shadow: 2px 2px 2px gray;
            &:hover{
                opacity: 60%;
            }

        }
        .message{
            height: 30px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            color: green;
            font-size: 10px;
            font-weight: bolder;    
            font-style: italic; 
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    .finish{
        margin-top: 20px;
        color: ${({theme}) => theme.main};
        border: 2px solid ${({theme}) => theme.main};
        padding: 10px 20px;
        box-shadow: 2px 2px 2px gray;
        &:hover{
            opacity: 50%;
        }


    }
    .return{
        color: ${({theme}) => theme.main3};
        border-bottom: 2px solid ${({theme}) => theme.hightlight};
        &:hover{
            opacity: 50%;
        }
    }
`

export const EmptyCart = styled.div`

    border: 2px solid gray;
    padding: 50px;
    text-align: center;
    color: gray;
    box-shadow: 2px 2px 2px lightgray;
    p{
        font-size: 20px;
        margin-bottom: 20px;
    }

    a{
        color: ${({theme}) => theme.main};
        border-bottom: 2px solid ${({theme}) => theme.hightlight};
    }

`
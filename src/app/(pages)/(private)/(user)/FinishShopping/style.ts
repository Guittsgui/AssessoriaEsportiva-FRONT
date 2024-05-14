import styled from "styled-components";

export const Container = styled.div`
    min-height: 700px;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
    .Box{
        min-width: 700px; 
        min-height: 200px;
        border: 2px solid gray;
        padding: 20px;
    }

    .final{
        width: 200px;
        height: 40px;
        border-radius: 20px;
        border: 2px solid ${({theme}) => theme.main};
        background-color: transparent;
        color: ${({theme}) => theme.hightlight};
        box-shadow: 2px 2px 2px lightgray;
        &:hover{
            opacity: 70%;
        }
    }
`


export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        color: ${({theme}) => theme.main};
        border-bottom: 2px solid ${({theme}) => theme.hightlight};
        margin-bottom: 40px;
    }
    h3{
        border-top: 2px solid ${({theme}) => theme.hightlight};
        margin-top: 40px;
    }
    h4{
        color: ${({theme}) => theme.main3};
    }

    p{
        color: gray;
        font-style: italic;
    }
`

export const AdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    p{
        color: gray;
        font-style: italic;
    }

    span{
        color: red;
        font-size: 14px;
        
    }

    h2{
        color : ${({theme}) => theme.main};
        border-bottom: 2px solid ${({theme}) => theme.hightlight} ;
        padding-bottom: 10px;
    }

    input:disabled{
        border-color: gray;
        color: gray;
        background-color: lightgray;
        cursor: not-allowed;
    }

    .separator{
        display: flex;
        gap: 30px;
        input{
            width: 200px;
        }
    }
`

export const PaymentContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    h2{       
        color: ${({theme}) => theme.main};
        border-bottom: 2px solid ${({theme}) => theme.hightlight};
    }
    h3{
        color: gray;
        font-style: italic;
        font-size: 16px;
        margin-bottom: 5px;
    }
    .options{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 80px;
    }

`
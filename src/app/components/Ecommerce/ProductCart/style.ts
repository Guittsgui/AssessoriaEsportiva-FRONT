import styled from "styled-components";

export const Container = styled.div` 
    display: flex;
    border-bottom: 1px solid gray;
    min-width: 700px;
    padding: 25px 20px;
    gap: 10px;
    align-items: center;
    
    &:last-child{
        border: none;
    }

`

export const ProductImageAndName = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    .image{
        height: 100px;
        width: 100px;
        background-color: blue;
    }
    .title{

    }

`

export const ProductSinglePriece = styled.div`
    flex: 1;
    font-weight: bold;
    font-size: 18px;
    font-style: italic;
    letter-spacing: 1px;
`

export const ProductQuantity = styled.div` 
    flex: 1;
    display: flex;
    gap: 10px;
    align-items: center;
    button{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.main};
        background-color: transparent;
        font-weight: bolder;

    }
    .border{
        height: 40px;
        width: 40px;
        border: 2px solid ${({theme}) => theme.main2};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const ProductsTotalPriece = styled.div`
    flex: 1;
    font-size: 20px;
    font-weight: bold;
    color: ${({theme}) => theme.main1};

`

export const Remove = styled.div`
    button{
        border: none;
        background-color: transparent;
        color: red;
        &:hover{
            opacity: 60%;
        }
    }
    
`
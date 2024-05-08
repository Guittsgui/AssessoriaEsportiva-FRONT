import styled from "styled-components";

type props = {
    urlImage : string | undefined | null;
}

export const Container = styled.div` 
    display: flex;
    border-bottom: 1px solid gray;
    min-width: 800px;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    padding-bottom: 10px;
    
    &:last-child{
        border: none;
    }

`

export const ProductImageAndName = styled.div<props>`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    .image{
        flex:1;
        height: 140px;
        width: 200px;
        border: 1px solid gray;
        background-image: url(${(props) => props.urlImage});
        background-size: cover;
        background-position: center;
    }
    .title{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

`

export const ProductSinglePriece = styled.div`
    flex: 1;
    font-weight: bold;
    font-size: 18px;
    font-style: italic;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductQuantity = styled.div` 
    flex: 1;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
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
    display: flex;
    align-items: center;
    justify-content: center;

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
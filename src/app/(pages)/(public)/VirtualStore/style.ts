import styled from "styled-components";

export const Container = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;
`

export const Header = styled.header`
    height: 60px;
    background-color: ${({theme}) => theme.main2};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    color: white;
    p{
        font-size: 30px;
        text-shadow: 2px 2px 2px black;
        font-style: italic;
    }
    .counterContainer{
        display: flex;
        align-items: end;
        cursor: pointer;
        
        &:hover{
            opacity: 80%;
        }

        .counter{
            background-color: red;
            border-radius: 50%;
            padding: 4px;
            margin-left: -10px;
        }
    }
`

export const Banner = styled.div`
    height: 300px;
    width: 100%;
    background-image: url("https://www.cpdf.com.br/wp-content/uploads/2019/12/Beneficios-da-atividade-fisica-no-inverno.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 23px;
    text-shadow: 4px 4px 4px black;
`

export const Nav = styled.nav`
    height: 100px;
    width: 100%;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 40px;
    input{
        width: 300px;
    }

    .inputContainer{      
        color: ${({theme}) => theme.main};
        display: flex;
        align-items: center;
        justify-content: center;
        .icon{
            margin-left: -40px;
        }
    }

    .selectContainer{
        display: flex;
        color: ${({theme}) => theme.main};
        font-style: italic;
        gap: 10px;
        select{
            border-color: ${({theme}) => theme.main};
            outline: none;
            color: ${({theme}) => theme.main};
        }
    }
`


export const ProductListContainer = styled.div`
    width: 900px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`

export const PaginationContainer = styled.div`
    height: 30px;
    display:flex;
    align-items: center;
    font-size: 20px;
    margin-top: 20px;
    span{
        font-weight: bolder;
        font-style: italic;
        border-bottom: 2px solid;
        border-color: ${({theme}) => theme.hightlight}
    }
`
import styled from "styled-components";

export const Container = styled.div`

    width: 280px;
    margin-top: 20px;

    .imageContainer{
        height: 250px;
        width: 100%;
        display: flex;
        align-items: center;
        
        .image{
            height: 240px;
            width: 100%;
            background-image: url("https://loja.comerciomix.com.br/media/catalog/product/cache/fb4f878514d02efd710032ded901d118/c/a/camiseta-azul-royal-para-sublima_o-tradicional_1.jpg");
            background-size: cover;
            background-position: center;
            
        }
    }
    .infosContainer{
        height: 120px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        span{
            font-size: 20px;
            font-weight: bold;
            font-style: italic;
        }
        button{
            padding: 10px;
            border-radius: 10px;
            border: none;
            background-color: transparent;
            border-bottom: 2px solid;
            border-color: ${({theme}) => theme.hightlight};
            color: ${({theme}) => theme.main}
        }
    }

`
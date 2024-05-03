import styled from "styled-components";

type props = {
    url: string | undefined
}

export const Container = styled.div`

    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const productContainer = styled.div<props>`
    width: 1000px;
    height: 600px;

    display:flex;

    .imageBox{
        flex: 2;
        width: 100%;
        height: 100%;
        padding: 10px;

        .image{
            background-image: url(${(props) => props.url});
            background-size: cover;
            background-position: center;
            height:100%;
        }

    }
    
    .infoBox{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        h4{
            font-size: 30px;
            color: ${({theme}) => theme.main};
            border-bottom: 4px solid;
            border-color: ${({theme}) => theme.hightlight}
        }
        span{
            font-weight: bolder;
            font-style: italic;
            font-size: 25px;
        }
        p{
            text-align: center;
            font-size: 20px;
        }
        .priece{
            display:flex;
            flex-direction: column;
            align-items: center;
        }
        button{
            padding: 10px;
            border-radius: 20px;
            background-color: transparent;
            border: 2px solid;
            border-color: ${({theme}) => theme.main};
            color: ${({theme}) => theme.hightlight};
            font-size: 16px;
            &:hover{
                opacity: 70%;
            }
        }

        a{
            color: ${({theme}) => theme.main3};
            font-size: 18px;
            &:hover{
                opacity: 70%;
            }
        }
    }
    
`

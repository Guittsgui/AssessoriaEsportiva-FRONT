import styled from "styled-components";

type props = {
    url: string;
}

export const Container = styled.div<props>`
    border: 2px solid;
    border-color: ${({theme}) => theme.main3};
    padding: 10px 20px;
    border-radius: 30px;
    box-shadow: 2px 2px 2px lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        border-bottom: 2px solid orange;
        padding-bottom: 5px;
    }
    .image{
        height: 200px;
        width: 200px;
        background-image: url(${(props) => props.url});
        background-position: center;
        background-size: cover;
    }


`
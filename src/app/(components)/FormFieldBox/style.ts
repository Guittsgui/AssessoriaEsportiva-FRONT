import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    span{
        padding-left: 15px;
    }
    p{
        color: red;
        font-weight: bolder;
        font-size: 12px;
        padding-left: 20px;
    }

    textarea{
        resize: none;
        outline: none;
        width: 400px;
        height: 200px;
        border-radius: 20px;
        box-shadow: 1px 1px 1px gray;
        padding: 15px;
    }

    div{
        height: 18px;
        display:flex;
        align-items: center;
    }

`
import styled from "styled-components";

export const SingleSportContainer = styled.div` 
    width: 200px;
    border: 2px solid ;
    border-color: ${({theme}) => theme.main};
    padding: 20px;
    border-radius: 20px;
    box-shadow: 3px 3px 3px lightgray;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h4{
            font-size: 35px;
            color: ${({theme}) => theme.main}
        }
        span{
            font-size: 30px;
            color: ${({theme}) => theme.hightlight};
            text-shadow: 1px 1px 1px gray;
        }
        h5{
            font-size: 20px;
            color: ${({theme}) => theme.main3};
            margin-bottom: 20px;
        }
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        li{
            margin-left: 10px;
            color: darkgray;
        }
    }

`
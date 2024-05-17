import styled from "styled-components";

type props = {
    show: boolean
}

export const Container = styled.div<props>`
    padding: 100px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;

    h2{
        font-size: 30px;
        color: ${({theme}) => theme.main};
        border-bottom: 2px solid ${({theme}) => theme.hightlight};
        margin-bottom: 40px;
    }

    .infosContainer{
        display: flex;
        flex-direction: column;
        gap: 15px;
        p{
            color: gray;
            font-size: 20px;
        }
        button{
            border: none;
            background-color: transparent;
            color: ${({theme}) => theme.main2};
            border-bottom: 1px solid orange;
            &:hover{
                opacity: 70%;
            }
            margin-bottom: 20px;
        }
    }

    .changePasswordContainer{
        display: ${(props) => props.show ? 'flex' : 'none'};
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }

`
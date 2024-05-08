import styled from "styled-components";

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
        border-bottom: 2px solid ${({theme}) => theme.hightlight};
        padding-bottom: 5px;
    }
    .counterContainer{
        display: flex;
        align-items: end;
        cursor: pointer;
        
        &:hover{
            opacity: 80%;
        }

        .counter{
            height: 25px;
            width: 25px;
            display:flex;
            align-items: center;
            justify-content: center;
            background-color: red;
            border-radius: 50%;
            margin-left: -10px;
        }
    }
`
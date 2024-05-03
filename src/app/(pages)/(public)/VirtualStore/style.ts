import styled from "styled-components";

export const Container = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
   
    flex-direction: column;
`

export const NavContainer = styled.div`
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
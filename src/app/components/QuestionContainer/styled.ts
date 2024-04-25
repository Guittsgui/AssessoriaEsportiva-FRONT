import styled from "styled-components";

type props = {
    showAnswer: boolean
}

export const Container = styled.div<props>`
    width: 800px;
    min-height: 50px;
    color: white;
    margin-bottom: 30px;
    box-shadow: 3px 3px 3px lightgray;
    
    .QuestionBox{
        color: ${({theme}) => theme.main};
        border: 2px solid ;
        border-color: ${({theme}) => theme.main};
        padding: 10px 50px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        
        cursor: pointer;
        &:hover{
            opacity: 70%;
        }
        button{
            background-color: transparent;
            border: none;
            color: black;
        }
    }
    .AnswerBox{
        color: black;
        font-size: 18px;
        min-height: 50px;
        background-color: ${({theme})=> theme.mainlighter};
        padding: 20px;
        display: ${props => props.showAnswer ? 'flex' : 'none'};
        border: 2px solid ;
        border-color: ${({theme}) => theme.main};
        border-top: none;
    }
`
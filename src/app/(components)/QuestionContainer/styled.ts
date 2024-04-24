import styled from "styled-components";

type props = {
    showAnswer: boolean
}

export const Container = styled.div<props>`
    width: 800px;
    min-height: 50px;
    color: white;
    margin-bottom: 30px;
    p{
        font-size: 20px;
    }
    
    .QuestionBox{
        color: black;
        border: 2px solid black;
        padding: 10px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        color:black;
        min-height: 50px;
        background-color: lightgray;
        padding: 20px;
        display: ${props => props.showAnswer ? 'flex' : 'none'};
        border: 2px solid black;
        border-top: none;
    }
`
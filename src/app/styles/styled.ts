import styled from "styled-components";

export const Container = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 0;
`

export const TalkWithUsBanner = styled.div`
    h2{
        margin-bottom: 25px;
        border-bottom: 2px solid black;
        padding-bottom: 5px;
        font-size: 30px;
    }
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid black;
    padding: 20px;
`
export const FaqBanner = styled.div` 
    h2{
        margin: 20px;
        font-size: 30px;
    }
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    min-height: 500px;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
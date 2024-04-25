import styled from "styled-components";

export const Header = styled.header`
    height: 100px;
    border-bottom: 2px solid black;

    display: flex;

    .Logo{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        border-right: 1px solid black;
    }
    nav{
        flex:3;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
        font-size: 20px;
        font-weight: bolder;
        border-right: 1px solid black;
        
        a{

            &:hover{
                opacity: 80%;
                border-bottom: 2px solid black;
                padding-bottom: 5px;
            }
        }
    }
    .LoginArea{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;

        a{
            font-size: 20px;
            &:hover{
                text-decoration: underline;
                opacity: 70%;
            }
        }
    }
`
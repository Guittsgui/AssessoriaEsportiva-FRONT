import styled from "styled-components";

export const Header = styled.header`
    height: 100px;
    background: rgb(164,75,246);
    background: linear-gradient(90deg, rgba(164,75,246,1) 0%, rgba(44,20,102,1) 100%);
    color: white;

    display: flex;
    a{
        color: white;
    }

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
            text-shadow: 2px 2px 2px black;  
            &:hover{
                opacity: 80%;
                border-bottom: 2px solid black;
                padding-bottom: 5px;
                border-color: ${({theme}) => theme.main};

            }
        }
    }
    .LoginArea{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        text-shadow: 2px 2px 2px black;

        a{
            font-size: 20px;
            &:hover{
                opacity: 80%;
                border-bottom: 2px solid black;
                padding-bottom: 5px;
                border-color: ${({theme}) => theme.main};

            }
        }
    }
`
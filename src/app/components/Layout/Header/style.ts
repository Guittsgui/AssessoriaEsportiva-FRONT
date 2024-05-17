import styled from "styled-components";

type props = {
    isMenuOpen: boolean
}


export const Header = styled.header`
    height: 100px;
    background: rgb(55,94,153);
    background: linear-gradient(90deg, rgba(55,94,153,1) 0%, rgba(33,156,208,1) 43%, rgba(155,227,219,1) 100%);
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
                border-color: ${({theme}) => theme.hightlight};

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
                border-color: ${({theme}) => theme.hightlight};

            }
        }
    }
`

export const UserHeader = styled.div`
    width: 100%;
    height: 50px;
    background: rgb(18,32,54);
    background: linear-gradient(90deg, rgba(18,32,54,1) 0%, rgba(82,189,235,1) 60%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;

    p{
        color: ${({theme}) => theme.hightlight};
        font-size: 20px;
        font-style: italic;
    }

    button{
        background-color: transparent;
            border: none;
            font-size: 20px;
            color:white;
            text-shadow: 1px 1px 1px black;
            border-bottom: 2px solid ${({theme}) => theme.hightlight};
            &:hover{
                padding-bottom: 5px;
                opacity: 70%;
            }
    }


    .userArea{
        display: flex;
        gap: 100px;
        align-items: center;
    }
    .MenuLogo{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        &:hover{
            opacity: 80%;
        }
        
        div{
            width: 50px;
            height: 4px;
            background-color: orange;
            border: 1px solid black;
        }
    }
`

export const Dropdown = styled.div<props>` 
    width: 200px;
    height: 600px;
    position: fixed;
    top: 50px;
    background-color: ${({theme}) => theme.main};
    display: ${(props) => props.isMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    padding: 20px;
    

    a{
        color: white;
        text-shadow: 5px solid black;
        margin-bottom: 20px;
        &:hover{
            color: ${({theme}) => theme.hightlight}
        }
    }
`
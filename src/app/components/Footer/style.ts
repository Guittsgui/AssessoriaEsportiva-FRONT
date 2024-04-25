import styled from "styled-components";

export const Footer = styled.footer`
    height: 250px;
    background-color: black;
    color: white;
    display: flex;

    .infoLeft{
        flex:1;
        border-right: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        p{
            color: gray;
        }
        span{
            color: white;
        }
    }
    .mainInfo{
        flex: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
    .infoRight{
        flex: 1;
        border-left: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: gray;
        .paymentLogos{
            display: flex;
            gap: 20px;
        }
        a{
            color: white;
            &:hover{
                color: ${({theme}) => theme.main5}
            }
        }
    }
`



export const LogosBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    a{
        color: white;
    }

`
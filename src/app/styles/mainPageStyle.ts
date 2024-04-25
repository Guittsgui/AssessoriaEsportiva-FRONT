import styled from "styled-components";

export const Container = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
`


export const WhoWeAre = styled.div`
    height: 500px;
    width: 100%;
    display:flex;

    .leftSide{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;

        .textArea{
            width: 500px;
            display: flex;
            gap: 20px;
            flex-direction: column;
            p{
                font-size: 20px;
            }
            h2{
                font-size: 50px;
                font-style: italic;
                color: ${({theme}) => theme.main};
            }

            span{
                font-weight: bolder;
                font-style: italic;
                font-size: 20px;
            }
        }
    }

    .rightSide{
        flex: 1;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .imageBox{
            height: 350px;
            width: 500px;
            background-image: url('https://img.freepik.com/photos-premium/illustration-du-collage-sportif-triathlon-homme-femme-courant-natation_756405-40807.jpg');
            background-size: cover;
            background-position: center;
            box-shadow: 3px 3px 3px lightgray;
        }
    }

`
export const NumbersBanner = styled.div`
    height: 350px;
    padding: 30px;
    width: 100%;
    border-top: 2px solid ;
    border-color: ${({theme}) => theme.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 40px;
    font-size: 25px;
    .fp{
        font-weight: bolder;
        text-decoration: underline;
        font-style: italic;
        color: ${({theme}) => theme.main}
    }
    .infos{
        display: flex;
        width: 100%;
        gap: 50px;
        justify-content: space-around;

        div{
            width: 200px;
        }

        span{
            font-size: 60px;
            font-weight: bolder;
            color: ${({theme}) => theme.main4};
            text-shadow: 2px 2px 2px gray;
        }
    }
   

    h2{ 
        font-size: 45px;
        margin-top: 30px;
        color: ${({theme}) => theme.main}
    }

`
export const ImageBanner1 = styled.div`
    width: 100%;
    height: 300px;
    background-image: url('https://as2.ftcdn.net/v2/jpg/01/19/90/91/1000_F_119909170_k1868D0DeAsr27ziUM9XfqOSwaTJRBf2.jpg');
    background-position: center;
    background-size: cover;
`
export const OurSports = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2{
        font-size: 40px;
        margin: 20px;
        color: ${({theme}) => theme.main}
    }
`


export const NewsLetterBanner = styled.div`
    height: 220px;
    width: 100%;
    border-top: 3px solid;
    border-bottom: 3px solid;
    border-color: ${({theme}) => theme.main};
    display: flex;
    padding: 20px;

    div{
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 50px;
        gap: 10px;
        h4{
            font-size: 25px;
            font-style:italic;
            color: ${({theme}) => theme.main}
            
        }
        p{
            font-size: 18px;
        }
    }
    form{
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 50px;
        gap: 30px;

        input{
            height: 50px;
            border: none;
            border-bottom: 1px solid gray;
            padding-bottom: 10px;
            padding-left: 20px;
            outline: none;
            font-size: 18px;
        }
        button{
            height: 50px;
            border: none;
            background-color: transparent;
            border-bottom: 1px solid gray;
            text-align: initial; 
            padding-left: 20px;
            color: gray;
            font-size: 18px;
            &:hover{
                color: ${({theme}) => theme.main};
                border-bottom: 2px solid;
                border-color: ${({theme}) => theme.main};
                font-weight: bolder;
            }
        }
    }

`
export const FaqBanner = styled.div` 
    h2{
        margin: 20px;
        font-size: 35px;
        color: ${({theme}) => theme.main}
    }
    min-height: 500px;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const OurPlans = styled.div`
    height: 300px;
    width: 100%;
    background: rgb(55,94,153);
    background: linear-gradient(90deg, rgba(55,94,153,1) 0%, rgba(33,156,208,1) 43%, rgba(155,227,219,1) 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-shadow: 2px 2px 2px black;
    padding: 0px 200px;
    gap: 20px;
    h2{
        letter-spacing: 2px;
        font-size: 40px;
    }
    p{
        text-align: center;
        font-size: 20px;
    }
    a{
        color: white;
        background-color: ${({theme}) => theme.hightlight};
        padding: 20px 90px;
        border-radius: 20px;
        text-shadow: none;
        font-weight: bolder;
        letter-spacing: 2px;
        color: ${({theme}) => theme.main2};
        &:hover{
            opacity: 90%;
        }
    }
`

export const TalkWithUsBanner = styled.div`
    h2{
        margin-bottom: 25px;
        border-bottom: 2px solid black;
        padding-bottom: 5px;
        font-size: 35px;
        color: ${({theme}) => theme.main}
    }
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 20px;
`


export const ImageBanner2 = styled.div`
    width: 100%;
    height: 300px;
    background-image: url('https://triathlon.org.br/wp-content/uploads/2024/02/cropped-rio-triathlon-banner-site-1200x400_2.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
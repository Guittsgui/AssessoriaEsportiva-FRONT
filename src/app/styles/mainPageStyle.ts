import styled from "styled-components";

export const Container = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const WelcomeBanner = styled.div`
    height: 300px;
    padding: 10px;
    width: 100%;
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
            color: ${({theme}) => theme.main}
        }
    }
   

    h2{ 
        font-size: 35px;
        margin-top: 30px;
        color: ${({theme}) => theme.main}
    }

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
export const ImageBanner1 = styled.div`
    width: 100%;
    height: 300px;
    background-image: url('https://thumbs.dreamstime.com/z/grupo-do-%C3%ADcone-do-triathlon-47854358.jpg');
    background-position: center;
    background-size: cover;
`
export const ImageBanner2 = styled.div`
    width: 100%;
    height: 300px;
    background-image: url('https://triathlon.org.br/wp-content/uploads/2024/02/cropped-rio-triathlon-banner-site-1200x400_2.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
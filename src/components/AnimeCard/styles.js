import styled from "styled-components";
import { Card } from "../Cards/CardVertical/styles";
import { DisplayFlex } from "../styles";

export const CardDetails = styled(Card)`
    &, article{
            width: 260px;
            height: 440px;
            margin: 0;
        }
    
    @media(max-width: 990px){
        &, article{
            width: 100%;
            margin: 0 auto 40px auto;
        }
    }
    article{
        .background{
            background-position: center;
            background-size: cover;
            height: inherit;
        }
        .alinhamento{
            justify-content: flex-end;
            height: 95%;
        }
    }
`
export const DetailsConteiner = styled.section`
    ${DisplayFlex}
    align-items: flex-start;
    flex-wrap: wrap;
    @media(max-width: 989px){
        width: 690px;
        margin: 0 auto;
    }
    @media(max-width: 774px){
        width: 510px;
    }
    @media(max-width: 574px){
        width: 100%;
    }
`

export const AnimeInfo = styled.section`
    width: 100%;
    max-width: 850px;
    @media(max-width: 990px){
        margin: 0 auto 40px auto;
    }
    header{
        ${DisplayFlex};
        flex-wrap: wrap;
        h1{
              color: #ffffff;
              font-size: 30px;
              font-weight: 700;
              margin-bottom: 15px;
        }
        p{
            font-size: 15px;
            color: #b7b7b7;
            display: block;
        }
        @media(max-width: 775px){
            p{
                margin-bottom: 20px;
            }
        }
        
        div{
            span{
                display: block;
                font-size: 18px;
                color: #b7b7b7;
            }
            span:first-child{
                margin-bottom: 5px;
            }
        }
    }
    .description{
        margin: 25px 0 15px 0;
        color: #b7b7b7;
        font-size: 18px;
        line-height: 30px;  
    }
    ul{
        margin-bottom: 35px;
        ${DisplayFlex};
        width: 610px;
    }
    @media (max-width: 774px){
        ul{
            width: 100%;
            display: block;
        }
        ul div:first-child{
            margin-bottom: 20px;
        }
    }
    li{
        position: relative;
        padding-left: 18px;
        line-height: 30px;
        span:first-child{
            font-size: 15px;
            color: #b7b7b7;
            width: 115px;
            display: inline-block;
        }
        span{
            font-size: 15px;
            color: #ffffff;
        }
    }
    li:first-child{
        width: 360px;
    }
    li::before{
        position: absolute;
        left: 0;
        top: 12px;
        height: 6px;
        width: 6px;
        background: #b7b7b7;
        content: "";
    }
    .button{
        margin-left: 0;
    }
`
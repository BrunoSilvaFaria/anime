import styled from "styled-components";
import {Card} from "../../components/CardVertical/styles";
export const Button = styled.button`
    border-radius: 4px;
    background: #e53637;
    padding: 15px 20px;
    margin-right: 11px;
    margin-bottom: 60px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    span{
        font-size: 14px;
    }
`
export const CardDetails = styled(Card)`
    width: 210px;
    height: 440px;
    margin: 0;
    .background{
        background-position: center;
        width: 210px;
        height: 440px;
    }
    .alinhamento{
        justify-content: flex-end;
        height: 415px;
    }
`
export const DetailsConteiner = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    max-width: 930px;
    margin: 70px auto;
`

export const AnimeInfo = styled.section`
    width: 690px;
    header{
        h1{
              color: #ffffff;
              font-size: 30px;
              font-weight: 700;
              margin-bottom: 13px;
        }
        p{
            font-size: 15px;
            color: #b7b7b7;
            display: block;
        }
        
        span{
            display: block;
            font-size: 18px;
            color: #b7b7b7;
        }
    }
    .description{
        margin: 25px 0 15px 0;
        color: #b7b7b7;
        font-size: 18px;
        line-height: 30px;  
    }
    ul{
        display: flex;
        justify-content: space-between;
        width: 610px;
        margin-bottom: 35px;
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
`
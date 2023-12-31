import styled from "styled-components";
import { DisplayFlex } from '../styles';

export const ReviewConteiner= styled.section`
    width: 100%;
    max-width: 610px;
`
export const Review = styled.section`
    ${DisplayFlex};width: 100%;
    &:first-of-type{
        margin-top: 20px;
    }
    margin-top: 15px;
    .card{
        overflow: hidden;
        background: #1d1e39;
        padding: 18px 30px 16px 20px;
        border-radius: 10px;
        width: 80%;
        max-width: 540px;
    }
    @media (min-width: 430px) {
        .card{
            width: 84%;
        }
    }
    @media (min-width: 500px) {
        .card{
            width: 87%;
        }
    }
    @media (min-width: 675px) {
        .card{
            width: 540px;
        }
    }

    img{
        position: relative;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    header{
        margin-bottom: 10px;
        width: fit-content;
        ${DisplayFlex};
        a{
            color: #ffffff;
            font-weight: 700;
            margin-bottom: 10px;
        }
        span{
            font-size: 16px;
            color: #b7b7b7;
            font-weight: 400;
            margin-left: 5px;
        }
    }
    p{
        color: #b7b7b7;
        line-height: 23px;
        font-size: 15px;
    }
`
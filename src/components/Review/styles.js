import styled from "styled-components";
import { DisplayFlex } from '../Components/Componente/styles';

export const ReviewConteiner= styled.section`
    width: 610px;
`
export const Review = styled(DisplayFlex)`
    width: 610px;
    &:first-of-type{
        margin-top: 20px;
    }
    margin-top: 15px;
    .card{
        /* position: absolute; */
        overflow: hidden;
        background: #1d1e39;
        padding: 18px 30px 16px 20px;
        border-radius: 10px;
        width: 540px;
    }

    img{
        position: relative;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    header{
        margin-bottom: 10px;
        a{
            color: #ffffff;
            font-weight: 700;
            margin-bottom: 10px;
        }
        span{
            color: #b7b7b7;
            font-weight: 400;
        }
    }
    p{
        color: #b7b7b7;
        line-height: 23px;
        font-size: 15px;
    }
`
import styled from "styled-components";
import { DisplayFlex } from '../../components/Components/Styles/styles';

export  const ConteinerVertical = styled.section`
    margin: 70px auto;
    @media (max-width: 450px) {
        width: 100%;
    }
    @media (min-width: 550px) and (max-width: 750px) {
        width: 510px;
        margin: auto;
    }
    width: 750px;
    div{
        ${DisplayFlex};
        flex-wrap: wrap;
    }
`

export const Card = styled.article`
    @media (max-width: 1000px) {
        width: 330px;
    }
    @media (max-width: 595px) {
        margin: 28px auto;
    }
    @media (min-width: 600px) and (max-width: 740px) {
        width: 240px;
    }
    margin-top: 28px;
    width: 230px;
    .alinhamento{
        height: 305px;
        width: 90%;
        margin: auto;
    }
    .background--vertical{
        height: 325px;
    }
    .display {
        align-items: center;    
    }
`
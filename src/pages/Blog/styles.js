import { styled,css } from "styled-components";
import { DisplayFlex, DisplayIcon } from "../../components/styles";

export const BlogConteiner = styled.section`
    width: 95%;
    max-width: 1160px;
    margin: 70px auto;
    .cards{
        ${DisplayFlex};
        flex-wrap: wrap;
    }
`
    
export const Cards = styled.section`
    ${DisplayFlex};
    flex-wrap: wrap;
    @media (min-width: 575px){
        width: 530px;
    }
    @media (min-width: 770px){
        width: 710px;
    }
    @media (max-width: 990px){
        margin: auto;
    }
    @media (min-width: 990px){
        width: 470px;
    }
    @media (min-width: 1200px){
        width: 575px;
    }
`
export const Card = styled.article`
    width: 100%;
    .background{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        margin-bottom: 10px;
    }
    .background--black{
        background: hsla(0, 0%, 0%, 0.25);
    }
    .background,
    .background--black{
        width: 100%;
        height:  285px;
    }

    .alinhamento{
        margin: auto;
        width: 90%;
        height: 265px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;
    }

    .data{
        ${DisplayIcon};
        margin-bottom: 15px;
        width: 100%;
        justify-content: center;
    }
    .data span{
        margin-left: 5px;
        font-size: 15px;
        line-height: 25px;
    }
        .icon{
            font-size: 18px;
        }
        .icon path{
            color: #e53637;
            font-size: 20px;
        }
        .link{
            font-size: 20px;
            line-height: 30px;
        }
`
export const Backgrounds = css`
    &{
        width: 49%;
    }
`
export const BackgroundChild = css`
    &{
        width: 100%;
    }
    .background,
    .background--black{
        height:  580px;
    }
    .alinhamento{
        height: 560px;
    }
`
export const CardsMain = styled(Card)`
        @media (min-width: 575px){
            ${Backgrounds};
        }
        &:nth-child(3n + 1){
            ${BackgroundChild};
        }
`

export const CardsSec = styled(Card)`
    @media (min-width: 575px){
            ${Backgrounds};
    }
    &:nth-child(3n + 3){
        ${BackgroundChild};
    }
`

import { styled } from "styled-components";
import { DisplayFlex } from "../../components/Components/Styles/styles";

export const BlogConteiner = styled.section`
    margin: auto;
    width: 90%;
    max-width: 930px;
    margin: 70px auto;
    .cards{
        width: 830px;
        ${DisplayFlex};
    }
    `
    
export const Cards = styled.section`
    ${DisplayFlex};
    flex-wrap: wrap;
    width: 410px;
`
export const Card = styled.article`
    .background{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin-bottom: 10px;
    }
    .background--black{
        background: hsla(0, 0%, 0%, 0.25);
    }
    .background,
    .background--black{
        width: 200px;
        height: 200px;
    }
    .alinhamento{
        margin: auto;
        width: 90%;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;
    }

    .data span{
        margin-bottom: 15px;
        font-size: 15px;
        line-height: 25px;
    }
        .data span:first-child{
            margin-right: 5px;
        }

        .link{
            font-size: 20px;
            line-height: 30px; 
        }

        
        
`
export const CardsMain = styled(Card)`
        &:nth-child(3n + 1){
            .background,
            .background--black{
                width: 410px;
                height: 400px;
            }
            .alinhamento{
                height: 380px;
            }
        }
`

export const CardsSec = styled(Card)`
        &:nth-child(3n + 3){
            .background,
            .background--black{
                width: 410px;
                height: 400px;
            }
            .alinhamento{
                height: 380px;
            }
        }
`

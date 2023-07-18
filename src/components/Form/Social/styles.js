import { styled } from "styled-components";

export const SocialConteiner = styled.section`
    width: 380px;
    @media (max-width: 990px){
        &{
            margin: auto;
            width: 460px;
        }
    }
    @media (max-width: 765px){
        &{
            width: 510px;
        }
    }
    @media (max-width: 575px){
        &{
            width: 100%;
        }
    }
    margin: 0 auto auto 313px;
    h3{
        font-size: 13px;
        letter-spacing: 2px;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 30px;
        padding-top: 40px;
    }
`


import styled from "styled-components";
import { Form, FormConteiner } from "../../components/Form/styles";

export const SignUpForm = styled.form`
    ${Form}
    height: 450px;
    h2{
        font-size: 30px;
        font-weight: 700;
        font-family: 'Oswald';
        margin-bottom: 30px;
        padding-top: 40px;
    }
    p{
        font-size: 15px;
    }
    a{
        color: #e53637;
        font-weight: 700;
    }
`

export const SignUpConteiner = styled.section`
    ${FormConteiner};
    width: 940px;
`  

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
    h2{
        font-size: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 30px;
        text-align: center;
    }
`
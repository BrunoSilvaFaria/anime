import styled from "styled-components";
import { Form, FormConteiner }from "../../components/Form/styles";

export const SignUpForm = styled.form`
    ${Form};
    height: 335px;
    p{
        font-size: 15px;
    }
    a{
        margin-left: 40px;
        font-weight: 700;;
    }

    @media (max-width: 990px){
        .inputConteiner{
            width: 690px;
        }
    }

    @media (max-width: 765px){
        .inputConteiner{
            width: 510px;
        }
    }
    
    @media (max-width: 575px){
        .inputConteiner{
            width: 100%;
        }
    }
    input{
        width: 80%;
    }
    @media (max-width: 450px){
        button{
            margin-bottom: 25px;
        }
        a{
            display: block;
            margin: 0;
        }
    }
`

export const LoginConteiner = styled.section`
    ${FormConteiner};
    flex-wrap: wrap;
    width: 890px;
    @media (max-width: 990px){
        &{
            display: block;
            margin: auto;
            width: 690px;
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
    .header{
        margin-bottom: 40px;
    }
`  
export const LoginMain = styled.section`
    margin: auto;
    width: 890px;
    
    @media (max-width: 990px){
        &{
            width: 95%;
        }
    }
    @media (max-width: 450px){
        &{
            width: 90%;
        }
    }
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
import styled from "styled-components";
import { FormConteiner }from "../../components/Form/styles";

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
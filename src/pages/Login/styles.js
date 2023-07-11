import styled from "styled-components";
import { Form, FormConteiner }from "../../components/Components/Styles/styles";

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
`

export const LoginConteiner = styled.section`
    ${FormConteiner};
    width: 890px;
    .header{
        margin-bottom: 40px;
    }
`  
export const LoginMain = styled.section`
    width: 890px;
    margin: auto;
`  
export const SocialConteiner = styled.section`
    width: 380px;
    margin: 0 auto auto 313px;
    h2{
        font-size: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 30px;
        text-align: center;
    }
`
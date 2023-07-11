import styled from "styled-components";
import { Form, FormConteiner } from "../../components/Components/Styles/styles";

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
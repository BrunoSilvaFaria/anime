import { styled, css } from "styled-components";
import { DisplayFlex } from "../styles"; 

// === Input / Form ===
export const FormInputs = css`
    color: #b7b7b7;
    background: #fff;
`
export const TextArea = css`
    ${FormInputs};
    overflow: hidden;
    resize: none;
    margin-bottom: 35px;
    padding: 15px 0 15px 20px;
    height: 115px;
    width: 100%;
    max-width: 610px;
`

export const InputConteiner = styled.div`
    ${FormInputs};
    width: 370px;
    padding: 10px 0;
    margin-bottom: 20px;
    span{
        padding: 0 15px;
        color: #b7b7b7;
        font-size: 20px;
    }
`
export const Input = styled.input`
    ${FormInputs};
    border-left: 1px solid #b7b7b7;
    padding-left: 20px;
    font-size: 15px;
    height: 30px;
`
export const FormHeader = styled.h2`
        font-size: 30px;
        font-weight: 700;
        font-family: 'Oswald';
        margin-bottom: 30px;
        padding-top: 40px;
`
export const Form = css`
    width: 435px;
    @media(max-width: 990px){
        width: 100%;
        margin: auto;
        border: 0;
    }
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    margin: 90px 0 0 65px;
`
export const FormConteiner = css`
    ${DisplayFlex};
    align-items: baseline;
    margin: auto;
`


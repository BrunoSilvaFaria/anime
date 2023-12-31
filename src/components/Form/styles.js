import { styled, css } from "styled-components";
import { DisplayFlex } from "../styles"; 

// === Default ===
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
export const Main = styled.section`
    margin: auto;
    margin-bottom: 120px;
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
export const Conteiner = styled.section`
    ${FormConteiner};
    flex-wrap: wrap;
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
`  
// === Input / Form ===
export const InputConteiner = styled.div`
    ${FormInputs};
    display: flex;
    align-items: center;

    width: 370px;
    padding: 10px 15px 10px 15px;
    margin-bottom: 20px;
   
    .icon{
        font-size: 20px;
    }
    .icon path{
        color: #b7b7b7;
    }
`
export const Input = styled.input`
    ${FormInputs};
    border-left: 1px solid #b7b7b7;
    padding-left: 20px;
    margin-left: 15px;
    font-size: 15px;
    height: 30px;
`


export const ConteinerInputs = styled.form`
    ${Form};
    height: 335px;
    margin: auto;
    p{
        font-size: 15px;
    }
    a{
        font-weight: 700;;
    }
    
    @media (max-width: 990px){
        .inputConteiner, &{
            width: 100%;
        }
    }

`





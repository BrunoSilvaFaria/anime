import styled from "styled-components";
import { DisplayFlex } from "../../components/Components/Styles/styles";
import {
    FormInputs,
    TextArea
} from "../../components/Form/styles.js";
import { ButtonStyle } from "../../components/Button/styles.js";

export const UlDisplay = styled.ul`
    display: flex;
    max-width: 610px;
    height: 100px;
    margin: auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`
export const BlogConteiner = styled.main`
    width: 90%;
    margin: 70px auto;
    max-width: 1140px;
`
export const SocialLinks = styled(UlDisplay)`
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 0;
    margin-top: 30px;
    a{
        span:first-child{
                margin-right: 10px;
            }
        }
    @media (min-width: 770px){
            &{
                width: 100%;
                margin: 0;
            }
        }
    @media (max-width: 770px){
        li{
            width: calc(50% - 10px);
        }
        a{
            width: 100%;
            margin: 0 0 10px 0;
        }
    }
`
export const AnchorPost = styled(UlDisplay)`
    ${DisplayFlex};
    align-items: center;
    a{
        font-size: 17px;
        letter-spacing: 2px;
        width: 275px;
        line-height: 30px;
    }
    a:nth-child(2){
        text-align: right;
    }
`
export const GenrePost = styled(UlDisplay)`
    li{
        margin-right: 10px;
        a{
            ${ButtonStyle};
            background: #242540;
            border-radius: 2px;
            color: #b7b7b7;
            font-size: 12px;
            padding: 6px 15px;

        }
    }
`
export const HeaderBlog = styled.header`
    width: 100%;
    max-width: 610px;
    text-align: center;
    margin: 55px auto;
    h3{
        margin-bottom: 30px;
        font-size: 15px;
        .genres{
            font-weight: 700;
            text-transform: uppercase;
        }
        .date{
            color: #b7b7b7;
            font-weight: 400;
        }
    }
    h1{
        font-weight: 700;
        margin-bottom: 10px;
        font-size: 30px;
        line-height: 38px;
    }
    @media(min-width: 480px){
        h1{
            font-size: 34px;
        }
    }
    @media(min-width: 770px){
        h1{
            font-size: 48px;
            line-height: 60px;
        }
    }
`

export const HeaderPost= styled.header`
    margin: 0 auto 45px auto;
    max-width: 1140px;
    width: 100%;
    p{
        max-width: 620px;
    }
`

export const SectionPost= styled.section`
    margin: 0 auto 45px auto;
    max-width: 610px;
    h2{
        margin-bottom: 35px;
    }
`

export const ImgPost = styled.img`
    width: 100%;
    margin-bottom: 30px;
`

export const ParagraphPost = styled.p`
    font-size: 17px;
    line-height: 30px;
    margin: auto;
`

export const Comments= styled.section`
    margin: 70px auto 45px auto;
    max-width: 610px;
    h3{
        margin-bottom: 35px;
        font-size: 24px;
        font-weight: 700;
    }
`

export const Comment= styled.article`
    display: flex;
    margin-bottom: 40px;
    h3{
        margin-bottom: 35px;
        font-size: 24px;
        font-weight: 700;
    }
    img{
        width: 70px;
        height: 70px;
        margin-right: 25px;
    }

    section{
        span, p{
            color: #b7b7b7;
            font-size: 14px;
            line-height: 22px;
        }
        h4{
            font-size: 18px;
            margin: 10px 0;
        }
        p{
            margin-bottom: 30px;
        }
    }

    button{
        background: #242540;
        letter-spacing: 2px;
        font-size: 16px;
        margin-right: 15px;
        padding: 6px 20px;
        border-radius: 2px;
        transition: all, 0.3s;
    }

    button:hover{
        background: #e53637;
    }
`
export const CommentReply = styled(Comment)`
    @media (min-width: 480px){
        align-self: flex-end;
    }
    @media (min-width: 650px){
        width: 495px;
    }
`
export const CommentConteiner = styled.article`
    @media (min-width: 480px){
        display: flex;
        flex-direction: column;
    }
`

export const CommentForm = styled.form`
    max-width: 610px;
    margin: auto;
    border-top: 1px solid #242540;
    h3{
        padding-top: 55px;
        margin-bottom: 30px;
    }
    input, textarea{
        ${FormInputs};
        padding: 10px 0 10px 20px;
        font-size: 15px;
    }
    div{
        ${DisplayFlex};
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
    input[type=text],
    input[type=email]{
        height: 50px;
        width: 290px;
    }
    textarea{
        ${TextArea};
        padding-top: 15px;
    }

    @media (max-width: 1200px){
        input[type=text],
        input[type=email]{
            width: 330px;
        }
    }
    @media (max-width: 1000px){
        input[type=text],
        input[type=email]{
            width: 290px;
        }
    }

    
    @media (max-width: 775px){
        input[type=text],
        input[type=email]{
            width: 250px;
        }
    }

    @media (max-width: 575px){
        input[type=text],
        input[type=email], 
        textarea{
            width: 100%;
        }
        input[type=text]{
            margin-bottom: 30px;
        }
    }

    

    input, textarea, button{
        border-radius: 2px;
    }

    button{
        ${ButtonStyle};
        font-size: 13px;
        padding: 12px 30px;
    }
`


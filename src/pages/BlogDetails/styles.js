import styled from "styled-components";
export const UlDisplay = styled.ul`
display: flex;
width: 610px;
height: 100px;
margin: auto;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`
export const SocialLinks = styled(UlDisplay)`
    justify-content: space-around;
    border-bottom: 0;
    a{
        span:first-child{
            margin-right: 10px;
        }
    }
`
export const AnchorPost = styled(UlDisplay)`
    justify-content: space-between;
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
            background: #242540;
            border-radius: 2px;
            padding: 6px 15px;
            text-transform: uppercase;
            font-size: 12px;
            color: #b7b7b7;
            letter-spacing: 2px;
            font-weight: 700;
        }
    }
`
export const HeaderBlog = styled.header`
    width: 610px;
    text-align: center;
    margin: 70px auto;
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
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        margin-bottom: 10px;
    }
`

export const HeaderPost= styled.header`
    margin: 0 auto 45px auto;
    width: 90%;
    max-width: 1140px;
    p{
        width: 610px;
    }
`

export const SectionPost= styled.section`
    margin: 0 auto 45px auto;
    width: 610px;
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
    width: 610px;
    h3{
        margin-bottom: 35px;
        font-size: 24px;
        font-weight: 700;
    }
`

export const Comment= styled.article`
    width: 90%;
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
        margin-right: 40px;
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
        font-size: 16px;
        margin-right: 15px;
        padding: 6px 20px;
        border-radius: 2px;
        letter-spacing: 2px;
        transition: all, 0.3s;
    }

    button:hover{
        background: #e53637;
    }
`
export const CommentReply = styled(Comment)`
    width: 495px;
    align-self: flex-end;
`
export const CommentConteiner = styled.article`
    display: flex;
    flex-direction: column;
`

export const CommentForm = styled.form`
    width: 610px;
    margin: auto;
    border-top: 1px solid #242540;
    h3{
        padding-top: 55px;
        margin-bottom: 30px;
    }
    input, textarea{
        padding: 10px 0 10px 20px;
        background: #fff;
        color: #b7b7b7;
        font-size: 15px;
    }
    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    input[type=text],
    input[type=email]{
        height: 50px;
        width: 290px;
    }
    textarea{
        width: 610px;
        height: 115px;
        resize: none;
        padding-top: 15px;
        overflow: hidden;
        margin-bottom: 35px;
    }

    input, textarea, button{
        border-radius: 2px;
    }

    button{
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 2px;
        padding: 12px 30px;
        background: #e53637;
    }
`


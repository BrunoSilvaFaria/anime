import { styled, css } from "styled-components";
// === Default ===
export const DisplayFlex = css`
    display: flex;
    justify-content: space-between;   
`


// === Tipografia ===
export const Links = css`
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
`

export const TitleAnime = styled.a`
    font-weight: 700;
    line-height: 26px;
    font-size: 18px;
`

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
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    margin: 90px 0 0 65px;
`
export const FormConteiner = css`
    ${DisplayFlex};
    align-items: baseline;
    margin: auto;
`
    

// === Button ===
export const ButtonStyle = css`
    ${Links};
    background: #e53637;
`
export const Button = styled.button`
    ${ButtonStyle};
    border-radius: 4px;
    padding: 15px 20px;
    margin: 0 0 60px 11px;
    span{
        font-size: 14px;
    }
`
export const ButtonLogin = styled.button`
    ${ButtonStyle};
    padding: 12px 30px;
    margin: 10px 0 40px 0;
`

export const ButtonRegister = styled.a`
    ${ButtonStyle};
    padding: 12px 30px;
    margin-top: 30px;
`

export const ButtonSocial = styled(ButtonLogin)`
    ${ButtonStyle};
    padding: 10px;
    width: 380px;
    margin: 0 0 15px 0;
    display: flex;
    align-items: center;
        span{
        font-size: 20px;
        margin: 0 40px 0 20px;
    }
`
export const ButtonFace = styled(ButtonSocial)`
    background: #4267b2;
`
export const ButtonGoogle = styled(ButtonSocial)`
    background: #ff4343;
`
export const ButtonTwitter = styled(ButtonSocial)`
    background: #1da1f2;
`

// === Link ===
export const LinkSocial = styled.a`
    border-radius: 2px;
    padding: 18px 30px;
    margin-top: 30px;
    font-size: 15px;
    display: inline-block;
`

export const LinkFace = styled(LinkSocial)`
    background: #4267b2;
`
export const LinkPinterest= styled(LinkSocial)`
    background: #ca2027;
`
export const LinkLinkedlin= styled(LinkSocial)`
    background: #0372b1;
`
export const LinkTwitter = styled(LinkSocial)`
    background: #1da1f2;
`
// === Cards ===
export const LabelConteiner = styled.div`
        margin-bottom: 15px;
        span{
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 10px;
            font-weight: 700;
            padding: 4px 10px;
            margin-right: 5px;
        }
`

export const CardConteiner = styled.div`
    font-size: 13px;
    .backgroundCard{
        background: #3d3d3d;
        padding: 6px 13px;
        border-radius: 4px;
    }
    .episodes {
        background-color: #e53637;
    }

    .dash{
        margin: 0 3px;
    }
    .icon{
        margin-right: 3px;
    }
`



export const Background = styled.div`
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;
        margin-bottom: 20px;   
`

export const AlinhamentoCards = styled.div`
    ${DisplayFlex};
    flex-direction: column;
    align-content: center;
    align-items: flex-start;   
`


export const DisplayCards = styled.div`
    ${DisplayFlex};
    width: 100%;  
`

// === Headers ===
export const Header = styled.header`
    ${DisplayFlex};
    align-items: center;
    flex-wrap: wrap;
`

export const HeaderTitle= styled.h4`
    border-left: 3px solid #e53637;
    font-size: 1.5em;
    font-weight: 700;
    height: 30px;
    line-height: 25px;
    padding-left: 15px;
    text-transform: uppercase;
`
export const HeaderSubtitle = styled(HeaderTitle)`
     font-size: 1.125em;
     font-weight: 600;
     line-height: 30px;
     padding-left: 10px;
     `

export const HeaderMedium = styled(Header)`
    ${DisplayFlex};
    ul{
        ${DisplayFlex};
    }
    li{
        list-style: none;
            a{
                font-size: 13px;
                color: #b7b7b7;
                margin-right: 7px;
                cursor: pointer;
            }
        }
        .link-active{
            color: #fff; 
    }
`
export const HeaderLarge = styled(Header)`
    width: 100%;
    div{
        display: block;
        a{
            font-size: 13px;
            ${Links};
        }
        span{
            font-size: 18px;
            margin-left: 5px;
        }
    }  
`
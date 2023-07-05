import styled from "styled-components";
// === Default ===
export const DisplayFlex = styled.div`
    display: flex;
    justify-content: space-between;   
`
// === Input / Form ===
export const InputConteiner = styled.div`
    background: #fff;
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
    border-left: 1px solid #b7b7b7;
    padding-left: 20px;
    color: #b7b7b7;
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

// === Button ===
export const Button = styled.button`
    border-radius: 4px;
    background: #e53637;
    padding: 15px 20px;
    margin-right: 11px;
    margin-bottom: 60px;
    margin: 0 0 60px 11px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    span{
        font-size: 14px;
    }
`
export const ButtonLogin = styled(Button)`
    border-radius: 0;
    padding: 12px 30px;
    margin: 10px 0 40px 0;
`

export const ButtonRegister = styled.a`
    background: #e53637;
    padding: 12px 30px;
    margin-top: 30px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
`

export const ButtonSocial = styled(ButtonLogin)`
    border-radius: 0;
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

export const TitleAnime = styled.a`
    font-weight: 700;
    line-height: 26px;
    font-size: 18px;
`

export const Background = styled.div`
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;
        margin-bottom: 20px;   
`

export const AlinhamentoCards = styled(DisplayFlex)`
    flex-direction: column;
    align-content: center;
    align-items: flex-start;   
`


export const DisplayCards = styled(DisplayFlex)`
    width: 100%;  
`

// === Headers ===
export const Header = styled(DisplayFlex)`
    align-items: center;
    flex-wrap: wrap;
`

export const HeaderTitle= styled.h4`
    border-left: 3px solid #e53637;
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 25px;
    padding-left: 15px;
    height: 30px;
    width: 250px;
`
export const HeaderSubtitle= styled(HeaderTitle)`
     font-size: 1.125em;
     font-weight: 600;
     line-height: 30px;
     padding-left: 10px;
`

export const HeaderMedium = styled(Header)`
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
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        span{
            font-size: 18px;
            margin-left: 5px;
        }
    }  
`
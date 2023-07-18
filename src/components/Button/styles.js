import { styled, css } from "styled-components";
// === Tipografia ===
export const Links = css`
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
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
    padding: 14px 0;
    width: 100%;
    margin: 0 0 15px 0;
    display: flex;
    align-items: center;

    p{
        margin: auto;
    }
    .icon{
        margin-left: 30px;
        font-size: 18px;
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

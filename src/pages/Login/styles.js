import styled from "styled-components";
export const SignUpForm = styled.form`
    width: 435px;
    height: 335px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 90px;
    margin-left: 65px;
    p{
        font-size: 15px;
    }
    a{
        margin-left: 40px;
        font-weight: 700;;
    }
`

export const LoginConteiner = styled.section`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 890px;
    margin: auto;
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
        font-family: 'Mulish';
        font-size: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 30px;
        text-align: center;
    }
    button{
        /* width: 100%; */
    }
`
import styled from "styled-components";
import { Card } from "../../components/CardVertical/styles";
import { HeaderTitle } from "../../components/Components/Componente/styles";

export const WatchConteiner = styled.section`
    width: 90%;
    max-width: 930px;
    margin: 70px auto;
`
export const VideoConteiner = styled(WatchConteiner)`
    width: 100%;
    video{
        width: 100%;
        max-width: 930px;
        height: 530px;
        border-radius: 6px;
        margin-bottom: 60px;
    }
`

export const Comment = styled.form`
    width: 610px;
    .header{
        margin-bottom: 20px;
        color: red;
    }
    textarea{
        color: #b7b7b7;
        background: #fff;
        width: 610px;
        height: 115px;
        resize: none;
        padding: 15px 0 15px 20px;
        overflow: hidden;
        margin-bottom: 35px;
        border-radius: 5px;
    }

    button{
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 2px;
        padding: 10px 30px;
        background: #e53637;
        border-radius: 2px;
    }
`
export const HeaderComment = styled(HeaderTitle)`
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 45px;
`
export const Episodes = styled.section`
    width: fit-content;
    margin: auto auto 50px auto;
    a{
        background: #3c3d55;
        border-radius: 4px;
        padding: 10px 20px;
        margin-right: 20px;
        transition: all, 0.3ms
    }
    a:last-child{
        margin-right: 0;
    }
    a:hover{
        background: #e53637;
    }
`
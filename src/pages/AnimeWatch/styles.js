import styled from "styled-components";
import { ButtonStyle, TextArea} from "../../components/Components/Styles/styles";
import { HeaderTitle } from "../../components/Components/Styles/styles.js";

export const WatchConteiner = styled.section`
    width: 90%;
    max-width: 1140px;
    margin: 70px auto;
`
export const VideoConteiner = styled(WatchConteiner)`
    width: 100%;
    height: 100%;
    
    video{
        width: 100%;
        height: inherit;
        border-radius: 6px;
        margin-bottom: 60px;
    }
`

export const Comment = styled.form`
    width: 100%;
    max-width: 610px;
    /* .header{
        margin-bottom: 20px;
        color: red;
    } */
    textarea{
        ${TextArea};
        border-radius: 5px;
    }

    button{
        ${ButtonStyle};
        font-size: 12px;
        padding: 10px 30px;
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
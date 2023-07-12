import styled from "styled-components";
import { HeaderTitle } from "../../components/Components/Styles/styles.js";

export const HeaderEpisodes = styled(HeaderTitle)`
    font-size: 18px;
    margin: 45px auto 20px auto;
`
export const Conteiner = styled.section`
    margin: 70px auto;
    max-width: 1140px;
    width: 95%;
`
export const Episodes = styled.section`
    max-width: 930px;
    margin: auto;
    ul{
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
    }
    li{
        margin-bottom: 20px;
    }
    img{
        width: 150px;
        margin-bottom: 15px;
    }
    a{
        background: #1d1e39;
        border-radius: 5px;
        text-align: center;
        margin-left: 20px;
        padding: 15px;
        width: 180px;
    }
    @media (max-width: 450px){
        a{
            width: 150px;
        }
        img{
            width: 120px;
        }
    }
    
    img, a{
        display: block;
    }

    .paginas a{
        width: fit-content;
        padding: 10px 25px;
        transition: all, 0.3s;
    }
    .paginas a:hover{
        background: #e53637;
    }
`
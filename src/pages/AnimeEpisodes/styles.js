import styled from "styled-components";
import { HeaderTitle } from "../../components/Components/Componente/styles";

export const HeaderEpisodes = styled(HeaderTitle)`
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 45px;
`
export const Episodes = styled.section`
    width: 930px;
    margin: auto;
    ul{
        margin-top: 30px;
        display: flex;
        /* justify-content: space-between; */
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
        text-align: center;
        width: 180px;
        background: #1d1e39;
        margin-left: 20px;
        padding: 15px;
        border-radius: 5px;
    }
    
    img, a{
        display: block;
    }

    .paginas a{
        width: fit-content;
        padding: 10px 25px;
    }
`
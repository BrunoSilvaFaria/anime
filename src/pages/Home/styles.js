import styled from "styled-components";
export const HomeConteiner = styled.div`
    max-width: 1140px;
    width: 90%;
    margin: auto;
    @media (min-width: 1200px){
        display: flex;
        flex-wrap: wrap;
    }

    @media (min-width: 800px) and (max-width: 1190px){
        .conteiner__aside{
            display: flex;
            width: 720px;
            justify-content: space-between;
            margin: auto;
        }
    }
`
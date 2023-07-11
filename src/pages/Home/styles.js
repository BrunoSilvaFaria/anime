import styled from "styled-components";
export const HomeConteiner = styled.div`
    width: 95%;
    margin: auto;
    @media (min-width: 1200px){
        width: 1140px;
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
    }

    @media (min-width: 620px) and (max-width: 1190px){
        .conteiner__aside{
            display: flex;
            justify-content: space-between;
            margin: auto;
            width: 100%;
        }
    }
`
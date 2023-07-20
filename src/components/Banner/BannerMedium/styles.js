import styled from "styled-components";
export const Banner = styled.header`
    background: url('assets/normal-breadcrumb.jpg');
    background-size: cover;
    background-position: top center;
    width: 100%;
    height: 300px;
    margin-bottom: 90px;
        
    @media (max-width: 990px){
        &{
            margin-bottom: 90px;
        }
    }
    div{
        width: 80%;
        height: 200px;
        margin: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    p{
        font-size: 24px;
    }

    h1{
        font-size: 48px;
        font-family: "Oswald", sans-serif;
        margin-bottom: 22px;
    }
`
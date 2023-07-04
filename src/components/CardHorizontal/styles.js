import styled from "styled-components";
export const ConteinerHorizontal = styled.section`
    @media (max-width: 450px) {
        width: 90%;
    }
    margin: auto;
    margin-top: 70px;
    width: 290px;
`
export const Card = styled.article`
    @media (max-width: 450px) {
        width: 330px;
        margin: 18px auto;
    }
    margin-top: 18px;
    height: 190px;
    width: 290px;
    .background{
        border-radius: 5px;
        margin-bottom: 20px;
        height: 190px;
    .alinhamento{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

    }
    .alinhamento{
        flex-direction: column;
        height: 160px;
        width: 90%;
        margin: auto;
    }
    .card {
        font-size: 13px;
        margin-top: 10px;
        div{
    background: #3d3d3d;
    padding: 6px 13px;
    border-radius: 4px;
        }
    }

    .rage {
        div{
    background-color: #e53637;
        }
        .dash{
    margin: 0 3px;
        }
    }

    .display {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .coments,
    .view {
        span:first-child{
    margin-right: 3px;
        }
    }
    a{
        font-weight: 700;
        line-height: 26px;
        font-size: 18px;
    }
        }
        .label {
    margin-bottom: 15px;
    span{
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        font-size: 10px;
        font-weight: 700;
        padding: 4px 10px;
        margin-right: 5px;
    }
        }

`
import styled from "styled-components";
export const Footer= styled.header`
    height: 190px;
    background: #070720;
    font-size: 15px;
    font-weight: 700;
    margin-top: 50px;

    footer{
        display: inline-block;
        margin-top: 50px;
    }
    .footer,
    .list{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .footer{
        width: 90%;
        margin: auto;
        align-items: self-start;
    }
    .list{
        width: 600px;
        li{
            a{
                color: #D9D9D9;
            }
            a:hover{
                color: #fff;
            }
        }
    }

    p{
        width: 260px;
        font-size: 15px;
        color: #3d3d3d;
        line-height: 25px;
        a{
            color: #007bff;
        }
    }

`
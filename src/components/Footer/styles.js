import { styled, css } from "styled-components";
export const display = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const FooterConteiner= styled.footer`
    height: 190px;
    background: #070720;
    font-size: 15px;
    font-weight: 700;
    margin-top: 50px;
    button{
        background: #e53637;
        border-radius: 50%;
        margin: auto;
        display: block;
        position: relative;
        bottom: 25px;
        width: 50px;
        height: 50px;
    }
    .icon{
        font-size: 32px;
    }
    .conteiner{
        width: 95%;
        max-width: 1140px;
        margin: auto;
    }
     @media (max-width: 989px) {
         &{
             height: inherit;
         }
         button{
             margin: 0 auto 15px auto;
            }
            img, .list, p{
                margin: auto;
        }
        .list{
            margin: 25px auto;
        }
        
        img{
            display: block;
        }
     }
    @media (min-width: 990px) {
        .conteiner{
            ${display};
            height: 100px;
        }
        .footer{
            ${display};
            align-items: flex-start;
            height: 75px;
            width: 100%;
        }
        p{
            width: 260px;
        }   
    }

    .list{
        ${display};
        flex-wrap: wrap;
        width: 90%;
        max-width: 480px;
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
        width: 90%;
        max-width: 690px;
        font-size: 15px;
        color: #3d3d3d;
        line-height: 25px;
        a{
            color: #007bff;
        }
    }

`
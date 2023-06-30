import styled from "styled-components";
export const HeaderContainer = styled.header`
    height: 60px;
    background: #070720;
    font-size: 15px;
    font-weight: 700;
    nav{
        height: 60px;
        width: 90%;
        margin: auto;
    }

    nav,
    .list,
    .redes,
    .link-active,
    .conteiner{
        display: flex;
        justify-content: space-around;
        align-items: center;
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
    .link-active{
        background: #e53637;
        height: 60px;
        width: 120px;
    }

    .conteiner{
        width: 80px;
    }
    p{
        font-size: 18px;
    }

`
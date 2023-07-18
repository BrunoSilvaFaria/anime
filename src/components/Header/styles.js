import {styled, css} from "styled-components";

export const flex = css`
    display: flex;
    align-items: center;
    
`
export const HeaderContainer = styled.header`
    height: 60px;
    background: #070720;
    font-size: 15px;
    font-weight: 700;
    top: 0;
    width: 100%;
    div{
        width: 90%;
        max-width: 1140px;
        margin: auto;
    }
    nav{
        height: 60px;
        width: 90%;
        margin: auto;
        ${flex};
        justify-content: space-between;
    }
    .list,
    .redes,
    .link-active,
    .conteiner{
        ${flex};
        justify-content: space-around;
    }

    
    
    .conteiner{
        width: 80px;
    }
    p{
        font-size: 18px;
    }
    .menu{
        display: none;
    }
    @media (min-width: 991px) {
        .link-active{
            background: #e53637;
            height: 60px;
            width: 120px;
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
    }
     
    @media (max-width: 990px) {
        .link-active{
            display: block;
        }
        .conteiner{
            width: 200px;
        }
        .list{
            display: block;
            background: #fff;
            width: 80%;
            position: absolute;
            top: 60px;
            padding: 15px 25px;
        }
        .list li{
            padding: 7px 0;
        }
        .list  a{
            margin: 0;
            color: #111111;
            font-weight: 600;
            font-size: 14px;
        }

        .menu{
            display: block;
            button{
                    background: #222222;
                    padding: 1px 7px;
                    ${flex};
                    span{
                        font-size: 16px;
                        text-transform: uppercase;
                        line-height: 1.188em;
                        font-weight: 700;
                        text-shadow: 0 1px 3px #000;
                    }

                    .icon{
                        margin-left: 1px;
                        font-size: 30px;
                    }
            }
        }
    }
    @media (max-width: 575px) {
        .list{
            padding: 20px 30px;
            right: 0;
            width: 100%;
        }
        .list li{
            padding: 10px 0;
        }
    }

`
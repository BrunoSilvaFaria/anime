import styled from "styled-components";
export const HeaderConteiner = styled.div`
    header,
    div, 
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header{
        h4{
            border-left: 3px solid #e53637;
            font-size: 1.125em;
            font-weight: 600;
            text-transform: uppercase;
            line-height: 30px;

            padding-left: 10px;
            height: 30px;
        }

        li{
            a{
                font-size: 13px;
                color: #b7b7b7;
                margin-right: 7px;
                cursor: pointer;
            }
        }
        .link-active{
            color: #fff;
        }
    }

`
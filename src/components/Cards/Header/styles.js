import { styled } from "styled-components";
import { Links } from "../../Button/styles";
import { DisplayFlex } from "../../Components/Styles/styles";
// === Headers ===
export const Header = styled.header`
    ${DisplayFlex};
    align-items: center;
    flex-wrap: wrap;
`

export const HeaderTitle= styled.h4`
    border-left: 3px solid #e53637;
    font-size: 1.5em;
    font-weight: 700;
    height: 30px;
    line-height: 25px;
    padding-left: 15px;
    text-transform: uppercase;
`
export const HeaderSubtitle = styled(HeaderTitle)`
     font-size: 1.125em;
     font-weight: 600;
     line-height: 30px;
     padding-left: 10px;
     `

export const HeaderMedium = styled(Header)`
    ${DisplayFlex};
    ul{
        ${DisplayFlex};
    }
    li{
        list-style: none;
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
`
export const HeaderLarge = styled(Header)`
    width: 100%;
    div{
        display: block;
        a{
            font-size: 13px;
            ${Links};
        }
        span{
            font-size: 18px;
            margin-left: 5px;
        }
    }  
`
import styled from "styled-components";
export const HeaderConteiner = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 610px;
    h3{
            border-left: 3px solid #e53637;
            font-size: 1.5em;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 25px;
            padding-left: 15px;
            height: 30px;
    }
    div{
        display: block;
        a{
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        span{
            font-size: 18px;
            margin-left: 5px;
        }
    }  
`

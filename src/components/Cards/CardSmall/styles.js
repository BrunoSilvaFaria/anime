import styled from "styled-components";
import { DisplayFlex, DisplayIcon } from "../../styles";

export const ConteinerSmall = styled.section`
    @media (max-width: 450px) {
            width: 90%;
        }
    @media (max-width: 550px) {
        width: 100%;
    }
    margin: 70px auto;
    width: 360px;
`
    
export const CardSmall = styled.section`
    article{
            margin-top: 18px;
            width: 100%;
            ${DisplayFlex};
            .alinhamento{
                margin-top: 5px;
                width: 70%;
            }
            .background--small{
                width: 90px;
                height: 130px;
                border-radius: 0;
                margin-bottom: 0;
            }
            .view {
                ${DisplayIcon}
                    span{
                        color: #b7b7b7;
                        font-size: 13px;
                        margin: 0 3px;
                    }
                }
            .title{
                margin-bottom: 10px;
                display: block;
            }
    }
`
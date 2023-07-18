import { styled } from "styled-components"
import { DisplayFlex } from "../../styles"

export const Conteiner = styled.div`
        width: 90%;
        max-width: 370px;
        ${DisplayFlex};
        align-items: center;
        height: 40px;
        a{
                margin-left: 40px;
                font-weight: 700;;
        }
        
        button{
                margin: 0;
        }

        @media (max-width: 450px){
                button{
                margin-bottom: 25px;
                }
                a{
                display: block;
                margin: 0;
                }
    }
`

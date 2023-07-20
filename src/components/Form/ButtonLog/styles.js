import { styled } from "styled-components"
import { DisplayFlex } from "../../styles"

export const Conteiner = styled.div`
        width: 90%;
        max-width: 370px;
        height: 40px;
        a{
                margin: 35px 0;
                display: block;
                font-weight: 700;;
        }
        
        button{
                margin: 0;
        }
        
        @media (min-width: 480px){
                a{
                        margin-left: 40px;
                }
                &{
                        align-items: center;
                        ${ DisplayFlex };
                }
                
        }
`

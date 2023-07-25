import { styled } from "styled-components";
import { DisplayFlex, DisplayIcon } from "../styles";

// === Cards ===
export const LabelConteiner = styled.div`
        margin-bottom: 15px;
        span{
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 10px;
            font-weight: 700;
            padding: 4px 10px;
            margin-right: 5px;
        }
`
export const CardConteiner = styled.div`
    font-size: 13px;
    .backgroundCard{
        ${DisplayIcon};
        background: #3d3d3d;
        padding: 6px 13px;
        border-radius: 4px;
    }
    .episodes {
        background-color: #e53637;
    }

    .dash{
        margin: 0 3px;
    }
    .icon{
        margin-right: 3px;
    }
`

export const Background = styled.div`
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;
        margin-bottom: 20px;   
`

export const AlinhamentoCards = styled.div`
    ${DisplayFlex};
    flex-direction: column;
    align-content: center;
    align-items: flex-start;   
`


export const DisplayCards = styled.div`
    ${DisplayFlex};
    width: 100%;  
`
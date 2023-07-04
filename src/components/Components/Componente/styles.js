import styled from "styled-components";
// === Default ===
export const DisplayFlex = styled.div`
    display: flex;
    justify-content: space-between;   
`
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

export const TitleAnime = styled.a`
    font-weight: 700;
    line-height: 26px;
    font-size: 18px;
`

export const Background = styled.div`
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;
        margin-bottom: 20px;   
`

export const AlinhamentoCards = styled(DisplayFlex)`
    flex-direction: column;
    align-content: center;
    align-items: flex-start;   
`


export const DisplayCards = styled(DisplayFlex)`
    width: 100%;  
`

// === Headers ===
export const Header = styled(DisplayFlex)`
    align-items: center;
    flex-wrap: wrap;
`

export const HeaderTitle= styled.h4`
    border-left: 3px solid #e53637;
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 25px;
    padding-left: 15px;
    height: 30px;
    width: 250px;
`
export const HeaderSubtitle= styled(HeaderTitle)`
     font-size: 1.125em;
     font-weight: 600;
     line-height: 30px;
     padding-left: 10px;
`

export const HeaderMedium = styled(Header)`
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
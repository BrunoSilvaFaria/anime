import styled from "styled-components";

export const ConteinerSmall = styled.section`
    @media (max-width: 450px) {
        width: 330px;
    }
    margin: auto;
    margin-top: 70px;
    width: 290px;
`
    
export const CardSmall = styled.section`
        article{
            margin-top: 18px;
            width: 290px;
            display: flex;
            justify-content: space-between;
            .background{
                background: pink;
                width: 90px;
                height: 130px;
            }
            .alinhamento{
                flex-direction: column;
                align-items: flex-start;
                margin-top: 5px;
                width: 190px;
            }
            .view {
                    span{
                        color: #b7b7b7;
                        font-size: 13px;
                        margin-right: 3px;
                    }
                }
            a{
                font-weight: 700;
                line-height: 26px;
                font-size: 18px;
                margin-bottom: 10px;
                display: block;
            }
            .label {
                margin-bottom: 15px;
                span{
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50px;
                    font-size: 10px;
                    font-weight: 700;
                    padding: 4px 10px;
                    margin-right: 5px;
                }

            }
            }
`
import styled from "styled-components";

export const ConteinerSmall = styled.section`
    @media (max-width: 550px) {
        width: 100%;
    }
    margin: 70px auto;
    width: 290px;
`
    
export const CardSmall = styled.section`
    article{
            margin-top: 18px;
            width: 290px;
            display: flex;
            justify-content: space-between;
            .alinhamento{
                margin-top: 5px;
                width: 190px;
            }
            .background--small{
                width: 90px;
                height: 130px;
                border-radius: 0;
                margin-bottom: 0;
            }
            .view {
                    span{
                        color: #b7b7b7;
                        font-size: 13px;
                        margin-right: 3px;
                    }
                }
            .title{
                margin-bottom: 10px;
                display: block;
            }
    }
`
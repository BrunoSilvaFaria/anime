import styled from "styled-components";
export const CardSmall = styled.section`
    margin-left: 50px;
    margin-top: 70px;
    width: 290px;

    header{
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

    .conteiner{
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
    }

`
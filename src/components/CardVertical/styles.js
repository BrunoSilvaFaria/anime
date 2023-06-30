import styled from "styled-components";
export const CardVertical = styled.section`
    margin-left: 50px;
    margin-top: 70px;
    width: 610px;

    header,
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header{
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
    }

    .conteiner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        article{
            margin-top: 28px;
            width: 185px;
            .background{
                background: pink;
                border-radius: 5px;
                margin-bottom: 20px;
                height: 325px;
                .alinhamento{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    height: 315px;
                    width: 90%;
                    margin: auto;
                }
                .card {
                    font-size: 13px;
                    div{
                        background: #3d3d3d;
                        padding: 6px 13px;
                        border-radius: 4px;
                    }
                }
                
                .rage {
                    padding-top: 10px;
                    div{
                        background-color: #e53637;
                    }
                    .dash{
                        margin: 0 3px;
                    }
                }

                .display {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;                        /* margin-top: 10px; */
                }

                .coments,
                .view {
                    span:first-child{
                        margin-right: 3px;
                    }
                }

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
            a{
                font-weight: 700;
                line-height: 26px;
                font-size: 18px;
            }
        }
    }

`
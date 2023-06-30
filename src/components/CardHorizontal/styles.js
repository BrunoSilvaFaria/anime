import styled from "styled-components";
export const CardHorizontal = styled.section`
    margin-left: 50px;
    margin-top: 70px;
    width: 290px;

    header,
    div, 
    ul{
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
            height: 190px;
            width: 290px;
            .background{
                border-radius: 5px;
                margin-bottom: 20px;
                height: 190px;
                .alinhamento{
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;

                }
                .alinhamento{
                    flex-direction: column;
                    height: 160px;
                    width: 90%;
                    margin: auto;
                }
                .card {
                    font-size: 13px;
                    margin-top: 10px;
                    div{
                        background: #3d3d3d;
                        padding: 6px 13px;
                        border-radius: 4px;
                    }
                }
                
                .rage {
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
                }

                .coments,
                .view {
                    span:first-child{
                        margin-right: 3px;
                    }
                }
                a{
                    font-weight: 700;
                    line-height: 26px;
                    font-size: 18px;
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
            
        }
    }

`
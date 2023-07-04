import React from 'react';
import { HeaderConteiner } from "./styles";
export default function HeaderSmall(props) {
    return (
            <HeaderConteiner>
                <header>
                <h4>{props.title}</h4>
                </header>
            </HeaderConteiner>
    )
}
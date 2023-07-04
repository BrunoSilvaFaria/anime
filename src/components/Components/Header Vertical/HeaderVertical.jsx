import React from 'react';
import { HeaderConteiner } from "./styles";
export default function HeaderVertical(props) {
    return (
        <div>
            <HeaderConteiner>
                <h3>{props.title}</h3>
                <div>
                    <a href="#">View All</a>
                    <span>--</span>
                </div>
            </HeaderConteiner>
        </div>
    )
}
import React from 'react';
import { HeaderConteiner } from "./styles";
export default function HeaderHorizontal(props) {
    return (
            <HeaderConteiner>
                <header>
                <h4>{props.title}</h4>
                <nav>
                    <ul>
                        <li><a href="#">Day</a></li>
                        <li><a href="#">Week</a></li>
                        <li><a href="#">Month</a></li>
                        <li><a href="#">Years</a></li>
                    </ul>
                </nav>
                </header>
            </HeaderConteiner>
    )
}
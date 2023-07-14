import React from 'react';
import { HeaderMedium } from "./styles";
import { HeaderSubtitle } from "./styles";

export default function HeaderHorizontal(props) {
    return (
            <HeaderMedium>
                <HeaderSubtitle>{props.title}</HeaderSubtitle>
                <nav>
                    <ul>
                        <li><a href="#">Day</a></li>
                        <li><a href="#">Week</a></li>
                        <li><a href="#">Month</a></li>
                        <li><a href="#">Years</a></li>
                    </ul>
                </nav>
            </HeaderMedium>
    )
}
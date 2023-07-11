import React from 'react';
import { HeaderMedium } from "../Styles/styles";
import { HeaderSubtitle } from "../Styles/styles";
import { DisplayFlex } from "../Styles/styles";
export default function HeaderHorizontal(props) {
    return (
            <HeaderMedium>
                <HeaderSubtitle>{props.title}</HeaderSubtitle>
                <nav>
                    <DisplayFlex>
                        <li><a href="#">Day</a></li>
                        <li><a href="#">Week</a></li>
                        <li><a href="#">Month</a></li>
                        <li><a href="#">Years</a></li>
                    </DisplayFlex>
                </nav>
            </HeaderMedium>
    )
}
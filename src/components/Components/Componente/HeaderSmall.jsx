import React from 'react';
import { HeaderSubtitle} from "../Styles/styles";
export default function HeaderSmall(props) {
    return (
        <header>
            <HeaderSubtitle>{props.title}</HeaderSubtitle>
        </header>
    )
}
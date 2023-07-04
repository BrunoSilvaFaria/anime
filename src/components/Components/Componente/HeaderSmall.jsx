import React from 'react';
import { HeaderSubtitle} from "./styles";
export default function HeaderSmall(props) {
    return (
        <header>
            <HeaderSubtitle>{props.title}</HeaderSubtitle>
        </header>
    )
}
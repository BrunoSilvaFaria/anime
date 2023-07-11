import React from 'react';
import { HeaderTitle} from "../Styles/styles";
import { HeaderLarge} from "../Styles/styles";
export default function HeaderVertical(props) {
    return (
        <div>
            <HeaderLarge>
                <HeaderTitle>{props.title}</HeaderTitle>
                <div>
                    <a href="#">View All</a>
                    <span>--</span>
                </div>
            </HeaderLarge>
        </div>
    )
}
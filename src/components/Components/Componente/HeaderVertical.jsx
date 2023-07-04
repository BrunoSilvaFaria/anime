import React from 'react';
import { HeaderTitle} from "./styles";
import { HeaderLarge} from "./styles";
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
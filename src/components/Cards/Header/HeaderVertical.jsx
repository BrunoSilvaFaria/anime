import React from 'react';
import { HeaderTitle} from "./styles";
import { HeaderLarge } from "./styles";
import { IconArrowRight } from '../../../Icons';
export default function HeaderVertical(props) {
    return (
        <div>
            <HeaderLarge>
                <HeaderTitle>{props.title}</HeaderTitle>
                <div>
                    <a href="#">View All
                    <IconArrowRight className='icon'/>
                    </a>
                </div>
            </HeaderLarge>
        </div>
    )
}
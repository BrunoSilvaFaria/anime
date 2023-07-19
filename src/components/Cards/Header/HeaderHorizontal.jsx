import React from 'react';
import { HeaderMedium } from "./styles";
import { HeaderSubtitle } from "./styles";

export default function HeaderHorizontal(props) {
  return (
    <HeaderMedium>
      <HeaderSubtitle>{props.title}</HeaderSubtitle>
    </HeaderMedium>
  );
}

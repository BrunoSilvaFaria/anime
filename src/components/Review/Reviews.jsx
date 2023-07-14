import React from "react";
import dataReview from '../../data/dataReview';
import ReviewSection from './Review';
import HeaderSmall from "../Cards/Header/HeaderSmall";
import { ReviewConteiner } from "./styles";

import { criaElementos } from "../criaElementos";
export default function Reviews() {
  return (
      <ReviewConteiner>
          <HeaderSmall title="reviews"></HeaderSmall>
          <div>{criaElementos(dataReview, ReviewSection)}</div>
      </ReviewConteiner>
    );
  }
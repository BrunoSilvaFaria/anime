import React from "react";


import dataReview from '../../data/dataReview';
import ReviewSection from './Review';
import HeaderSmall from '../Components/Componente/HeaderSmall';
import {ReviewConteiner} from "./styles";

export default function Reviews() {
  const reviewComment = dataReview.map((item) => {
    return (
      <ReviewSection
        key={item.title}
        item={item}
      />
    )
  })
  return (
      <ReviewConteiner>
          <HeaderSmall title="reviews"></HeaderSmall>
            {reviewComment}
      </ReviewConteiner>
    );
  }
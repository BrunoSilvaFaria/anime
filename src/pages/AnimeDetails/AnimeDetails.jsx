import React from "react";
import Reviews from '../../components/Review/Reviews';
import AnimeCard from "../../components/AnimeCard/AnimeCard.jsx";
import { Conteiner } from "./styles";
export default function AnimeDetails() {
  return (
    <Conteiner>
      <AnimeCard />
      <Reviews />
    </Conteiner>
    );
  }

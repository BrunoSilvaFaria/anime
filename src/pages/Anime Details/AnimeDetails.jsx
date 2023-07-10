import React from "react";
import Reviews from '../../components/Review/Reviews';
import AnimeCard from "../AnimeCard/AnimeCard";
import { Conteiner } from "./styles";
export default function AnimeDetails() {
  return (
    <Conteiner>
      <AnimeCard />
      <Reviews />
    </Conteiner>
    );
  }

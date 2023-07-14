import React from "react";
import { Link } from "react-router-dom";
import {
  AlinhamentoCards,
  Background,
  CardConteiner,
  DisplayCards
} from "../Cards/styles.js";
import { Button } from "../Button/styles.js";

import { AnimeInfo } from "./styles.js";
import { CardDetails } from "./styles.js";
import { DetailsConteiner } from "./styles.js";
import { criaElementos } from "../criaElementos.js";
import CardVertical from "../Cards/CardVertical/CardVertical.jsx";

export default function AnimeCard() {
  const card = [
    {
      coment: '11',
      view: '9141',
      img: '/assets/anime/details-pic.jpg'
    }
  ]
  
  const dados = [
    {
      title: "Fate Stay Night: Unlimited Blade",
      subtitle: "フェイト／ステイナイト, Feito／sutei naito",
      votes: "1.029 Votes",
      description: "Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!",
      type: "TV Series",
      studios: "Lerche",
      dataAired: "Oct 02, 2019 to ?",
      status: "Airing",
      genre: "Action, Adventure, Fantasy, Magic",
      score: "7.31 / 1,515",
      rating: "8.5 / 161 times",
      duration: "24 min/ep",
      quality: "HD",
      views: "131,541"
    }
  ]
  return (
          <DetailsConteiner>
      <CardDetails>
        {criaElementos(card, CardVertical)}
      </CardDetails>
            
      <AnimeInfo className="anime">
        <div className="anime">
  <header>
    <div>
      <h1>{dados[0].title}</h1>
      <p>{dados[0].subtitle}</p>
    </div>
    <div>
      <span>xxxxx</span>
      <span>{dados[0].votes}</span>
    </div>
  </header>
  <p className="description">
    {dados[0].description}
  </p>
  <ul>
    <div>
      <li>
        <span>Type:</span>
        <span>{dados[0].type}</span>
      </li>
      <li>
        <span>Studios:</span>
        <span>{dados[0].studios}</span>
      </li>

      <li>
        <span>Data aired:</span>
        <span>{dados[0].dataAired}</span>
      </li>

      <li>
        <span>Status:</span>
        <span>{dados[0].status}</span>
      </li>

      <li>
        <span>Genre:</span>
        <span>{dados[0].genre}</span>
      </li>
    </div>
    <div>
      <li>
        <span>Score:</span>
        <span>{dados[0].score}</span>
      </li>
      <li>
        <span>Rating:</span>
        <span>{dados[0].rating}</span>
      </li>

      <li>
        <span>Duration:</span>
        <span>{dados[0].duration}</span>
      </li>

      <li>
        <span>Quality:</span>
        <span>{dados[0].quality}</span>
      </li>

      <li>
        <span>Views:</span>
        <span>{dados[0].views}</span>
      </li>
    </div>
  </ul>
</div>

              <Button className="button"> <span>^</span> Follow</Button>
              <Button><Link to='/animeWatch'>Watch Now</Link></Button>
            </AnimeInfo>
          </DetailsConteiner>
    );
  }

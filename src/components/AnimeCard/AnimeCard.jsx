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
  const dados = [
      {
        coment: '11',
        view: '9141',
        img: '/assets/anime/details-pic.jpg'
      }
  ]
  return (
          <DetailsConteiner>
      <CardDetails>
        {criaElementos(dados, CardVertical)}
      </CardDetails>
          
            <AnimeInfo className="anime">
              <header>
                <div>
                  <h1>Fate Stay Night: Unlimited Blade</h1>
                  <p>フェイト／ステイナイト, Feito／sutei naito</p>
                </div>
                <div>
                  <span>xxxxx</span>
                  <span>1.029 Votes</span>
                </div>
              </header>
              <p className="description">
                Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!
              </p>
              <ul>
                <div>
                  <li>
                    <span>Type:</span>
                  <span>TV Series</span>
                  </li>
                  <li>
                    <span>Studios:</span>
                  <span>Lerche</span>
                  </li>
          
                  <li>
                    <span>Data aired:</span>
                  <span>Oct 02, 2019 to ?</span>
                  </li>
          
                  <li>
                    <span>Status:</span>
                  <span>Airing</span>
                  </li>
          
                  <li>
                    <span>Genre:</span>
                  <span>Action, Adventure, Fantasy, Magic</span>
                  </li>
                </div>
                <div>
                  <li>
                    <span>Score:</span>
                  <span>7.31 / 1,515</span>
                  </li>
                  <li>
                    <span>Rating:</span>
                  <span>8.5 / 161 times</span>
                  </li>
          
                  <li>
                    <span>Duration:</span>
                  <span>24 min/ep</span>
                  </li>
          
                  <li>
                    <span>Quality:</span>
                  <span>HD</span>
                  </li>
          
                  <li>
                    <span>Views:</span>
                  <span>131,541</span>
                  </li>
                </div>
              </ul>
              <Button className="button"> <span>^</span> Follow</Button>
              <Button><Link to='/animeWatch'>Watch Now</Link></Button>
            </AnimeInfo>
          </DetailsConteiner>
    );
  }

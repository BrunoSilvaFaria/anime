import React from "react";
import { Link } from "react-router-dom";
import { Background } from "../../components/Components/Componente/styles.js";
import { AlinhamentoCards } from "../../components/Components/Componente/styles.js";
import { DisplayCards } from "../../components/Components/Componente/styles.js";
import { CardConteiner } from "../../components/Components/Componente/styles.js";

import { AnimeInfo } from "./styles";
import { Button } from "../../components/Components/Componente/styles.js";
import { CardDetails } from "./styles";
import { DetailsConteiner } from "./styles";
export default function AnimeCard() {
  return (
          <DetailsConteiner>
            <CardDetails>
            <Background className="background"
            style = {{ backgroundImage: `url(/assets/anime/details-pic.jpg)`}}>
              <AlinhamentoCards className="alinhamento">
              <DisplayCards className="display">
                <CardConteiner>
                    <div className="backgroundCard">
                        <span className='icon'>C</span>
                        <span>11</span>
                    </div>
                </CardConteiner>
          
                <CardConteiner>
                  <div className="backgroundCard">
                      <span className="icon">V</span>
                      <span>9141</span>
                  </div>
                </CardConteiner>
              </DisplayCards>
            </AlinhamentoCards>
              </Background>
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
              <Button> <span>^</span> Follow</Button>
              <Button><Link to='/animeWatch'>Watch Now</Link></Button>
            </AnimeInfo>
          </DetailsConteiner>
    );
  }

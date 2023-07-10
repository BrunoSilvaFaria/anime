import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "./styles";
import { CardConteiner } from "../Components/Componente/styles";
import { TitleAnime } from "../Components/Componente/styles";
import { Background } from "../Components/Componente/styles";
import { AlinhamentoCards } from "../Components/Componente/styles";
import { DisplayCards } from "../Components/Componente/styles";

export default function CardHorizontal(props) {
  return (
    <Card>
        <article>
        <Background className="background"
          style = {{ backgroundImage: `url('${props.item.img}')` }}>
            <AlinhamentoCards className="alinhamento">
              <DisplayCards className="display">
                <CardConteiner>
                  <div className="backgroundCard episodes">
                    <span>{props.item.episodes.episode}</span>
                    <span className="dash">/</span>
                    <span>?</span>
                  </div>
                </CardConteiner>
                  <CardConteiner>
                    <div className="backgroundCard">
                        <span className='icon'>V</span>
                        <span>{props.item.view}</span>
                    </div>
                  </CardConteiner>
              </DisplayCards>
              <Link to='/animeDetails'>
                <TitleAnime>{props.item.title}</TitleAnime>
              </Link>
            </AlinhamentoCards>
          </Background>
        </article>
    </Card>
  );
}
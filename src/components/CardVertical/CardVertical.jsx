import React from 'react';
import { Card } from "./styles";
import { LabelConteiner } from "../Components/Componente/styles";
import { CardConteiner } from "../Components/Componente/styles";
import { TitleAnime } from "../Components/Componente/styles";
import { Background } from "../Components/Componente/styles";
import { AlinhamentoCards } from "../Components/Componente/styles";
import { DisplayCards } from "../Components/Componente/styles";
import { Link } from 'react-router-dom';
export default function CardVertical(props) {
  return (
    <Card>
        <article>
          <Background className="background background--vertical"
          style = {{ backgroundImage: `url('${props.item.img}')` }}>
            <AlinhamentoCards className="alinhamento">
            <CardConteiner>
                <div className="backgroundCard episodes">
                    <span>{props.item.episodes.episode}</span>
                    <span className="dash">/</span>
                    <span>{props.item.episodes.episodes}</span>
                </div>
              </CardConteiner>
            <DisplayCards className="display">
              <CardConteiner>
                  <div className="backgroundCard">
                      <span className='icon'>C</span>
                      <span>{props.item.coment}</span>
                  </div>
              </CardConteiner>
                
              <CardConteiner>
                <div className="backgroundCard">
                    <span className="icon">V</span>
                    <span>{props.item.view}</span>
                </div>
              </CardConteiner>
            </DisplayCards>
          </AlinhamentoCards>
        </Background>
        <LabelConteiner>
                <div className="label">
                <span className="status">{props.item.label[0]}</span>
                <span className="categorie">{props.item.label[1]}</span>
          </div>
        </LabelConteiner> 
          <Link to='/animeDetails'>
            <TitleAnime href="#">{props.item.title}</TitleAnime>
          </Link>
        </article>
    </Card>
  );
}
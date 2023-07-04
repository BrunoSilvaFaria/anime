import React from 'react';
import { Card } from "./styles";
export default function CardVertical(props) {
  return (
    <Card>
        <article>
          <section className="background"
          style = {{ backgroundImage: `url('${props.item.img}')` }}>
            <div className="alinhamento">
              <div className="card card--rage rage">
                <div>
                  <span>{props.item.episodes.episode}</span>
                  <span className="dash">/</span>
                  <span>{props.item.episodes.episodes}</span>
                </div>
              </div>
              <div className="display">
                <div className="card coments">
                  <div>
                    <span>C</span>
                    <span>{props.item.coment}</span>
                  </div>
                </div>
                <div className="card view">
                  <div>
                    <span>V</span>
                    <span>{props.item.view}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <div className="label">
              <span className="status">{props.item.label[0]}</span>
            <span className="categorie">{props.item.label[1]}</span>
            </div>
          </div>
          <a href="#">{props.item.title}</a>
        </article>
    </Card>
  );
}
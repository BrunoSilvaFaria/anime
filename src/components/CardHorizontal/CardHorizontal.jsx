import React from 'react';
import { Card } from "./styles";
export default function CardHorizontal(props) {
  return (
    <Card>
        <article>
        <section className="background"
          style = {{ backgroundImage: `url('${props.item.img}')` }}>
            <div className="alinhamento">
              <div className="display">
                <div className="card card--rage rage">
                  <div>
                  <span>{props.item.episodes.episode}</span>
                    <span className="dash">/</span>
                    <span>?</span>
                  </div>
                </div>
                  <div className="card view">
                    <div>
                      <span>V</span>
                      <span>{props.item.view}</span>
                    </div>
                  </div>
              </div>
              <a href="#">{props.item.title}</a>
            </div>
          </section>
        </article>
    </Card>
  );
}
import React from 'react';
import { Review } from "./styles";
export default function ReviewSection(props) {
  return (
    <>
        <Review>
          <img src={`${props.item.img}`} alt="Foto de usuario" />
          <div className='card'>
            <div className="card__alinhamento">
              <header>
                <a href="#" className="user"> {props.item.user} - </a>
                <span className="time">{props.item.time}</span>
              </header>
              <p>
                {props.item.coment}
              </p>
            </div>
          </div>
        </Review>
    </>
  );
}
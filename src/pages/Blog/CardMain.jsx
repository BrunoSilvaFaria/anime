import { React } from "react";
import { Link } from "react-router-dom";
import { CardsMain } from './styles';
import { IconCalendar } from "../../Icons";
export default function CardMain(props) {
  return (
            <CardsMain>
      <div className="background background--main"
      style={{ backgroundImage: `url('${props.item.img}')` }} >
                <div className="background--black">
                  <div className="alinhamento">
                    <div className="data">
                      <IconCalendar/>
                     <span>{props.item.data}</span>
                     </div>
                    <Link className="link" to='/blogDetails'>{props.item.title}</Link>
                  </div>
                </div>
              </div>
            </CardsMain>

    );
  }

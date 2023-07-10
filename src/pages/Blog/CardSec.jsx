import { React } from "react";
import { Link } from "react-router-dom";
import { CardsSec } from './styles';

export default function CardSec(props) {
  return (
              <CardsSec>
        <div className="background background--sec"
          style={{ backgroundImage: `url('${props.item.img}')` }}>
                    <div className="background--black">
                      <div className="alinhamento">
                        <div className="data">
                          <span>C</span>
                         <span>{props.item.data}</span>
                         </div>
                        <Link className="link" to='/blogDetails'>{props.item.title}</Link>
          </div>
        </div>
                    </div>
              </CardsSec>
    );
  }

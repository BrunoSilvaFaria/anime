import { CardSmall } from "./styles";
import { Link } from "react-router-dom";
import { LabelConteiner } from "../Components/Componente/styles";
import { TitleAnime } from "../Components/Componente/styles";
import { Background } from "../Components/Componente/styles";
export default function Header(props) {
  return (
    <CardSmall>
        <article>
        <Background style={{ backgroundImage: `url('${props.item.img}')` }} className="background--small" >
          
        </Background>
          <div className="alinhamento">
            <LabelConteiner>
                <div className="label">
                  <span className="status">{props.item.label[0]}</span>
                  <span className="categorie">{props.item.label[1]}</span>
                </div>
            </LabelConteiner> 
            <Link to='/animeDetails'>
              <TitleAnime className="title">{props.item.title}</TitleAnime>
            </Link>
            <div className="view">
              <span>V</span>
              <span>{props.item.view}</span>
              <span>Viewes</span>
            </div>
          </div>
        </article>

    </CardSmall>
  );
}
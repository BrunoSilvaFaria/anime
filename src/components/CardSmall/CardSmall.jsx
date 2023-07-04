import { CardSmall } from "./styles";
export default function Header(props) {
  return (
    <CardSmall>
        <article>
        <div className="background"
        style = {{ backgroundImage: `url('${props.item.img}')` }}></div>
          <div className="alinhamento">
            <div className="label">
            <span className="status">{props.item.label[0]}</span>
            <span className="categorie">{props.item.label[1]}</span>
            </div>
            <a href="#">{props.item.title}</a>
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
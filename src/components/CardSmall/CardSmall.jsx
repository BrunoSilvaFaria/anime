import { CardSmall } from "./styles";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <CardSmall>
      <header>
        <h4>New Comment</h4>
      </header>

      <section className="conteiner">
        <article>
          <div className="background"></div>
          <div className="alinhamento">
            <div className="label">
              <span className="status">Active</span>
              <span className="categorie">Active</span>
            </div>
            <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
            <div className="view">
              <span>V</span>
              <span>94211</span>
              <span>Viewes</span>
            </div>
          </div>
        </article>
      </section>

    </CardSmall>
  );
}
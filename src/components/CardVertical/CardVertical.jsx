import { CardVertical } from "./styles";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <CardVertical>
      <header>
        <h3>Card vertical</h3>
        <div>
          <a href="#">View all</a>
          <span>--</span>
        </div>
      </header>

      <section className="conteiner">
        <article>
          <section className="background">
            <div className="alinhamento">
              <div className="card card--rage rage">
                <div>
                  <span>18</span>
                  <span className="dash">/</span>
                  <span>18</span>
                </div>
              </div>
              <div className="display">
                <div className="card coments">
                  <div>
                    <span>C</span>
                    <span>11</span>
                  </div>
                </div>
                <div className="card view">
                  <div>
                    <span>V</span>
                    <span>94211</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <div className="label">
              <span className="status">Active</span>
              <span className="categorie">Active</span>
            </div>
          </div>
          <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
        </article>
      </section>

    </CardVertical>
  );
}
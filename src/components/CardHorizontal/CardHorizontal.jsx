import { CardHorizontal } from "./styles";
import img from '../assets/popular/popular-1.jpg';
export default function Header() {
  return (
    <CardHorizontal>
      <header>
        <h4>Top Views</h4>
        <div>
          <ul className="display">
            <li>
              <a href="" className="link-active">Day</a>
            </li>
            
            <li>
              <a href="">Week</a>
            </li>

            <li>
              <a href="">Month</a>
            </li>

            <li>
              <a href="">Years</a>
            </li>
          </ul>
        </div>
      </header>

      <section className="conteiner">
        <article>
          <section className="background"
          style = {{backgroundImage: `url(${img})`}}>
            <div className="alinhamento">
              <div className="display">
                <div className="card card--rage rage">
                  <div>
                    <span>18</span>
                    <span className="dash">/</span>
                    <span>18</span>
                  </div>
                </div>
                  <div className="card view">
                    <div>
                      <span>V</span>
                      <span>94211</span>
                    </div>
                  </div>
              </div>
              <a href="#">Boruto: Naruto next generations</a>
            </div>
          </section>
        </article>
      </section>

    </CardHorizontal>
  );
}
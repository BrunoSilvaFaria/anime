import { HeaderContainer } from "./styles";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={logo} alt="Logo do site" />
        <ul className="list">
          <li className="link-active">
            <a href="#">Homepage</a>
          </li>
          <li>
            <a href="#">Categories ^</a>
          </li>
          <li>
            <a href="#">Our bloc</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <section className="conteiner">
          <button>
            {/* <img src={search} alt="Icone de busca" className="search" /> */}
            <p>P</p>
          </button>

          <button>
            {/* <img src={search} alt="Icone de busca" className="login" /> */}
            <p>L</p>
          </button>
        </section>
      </nav>
      </HeaderContainer>
  );
}
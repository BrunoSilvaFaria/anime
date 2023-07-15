import { HeaderContainer } from "./styles";
import { Link } from "react-router-dom";
import logo from "../logo.png";
export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <nav>
          <img src={logo} alt="Logo do site" />
          <ul className="list">
            <li className="link-active">
              <Link to='/'>Homepage</Link>
            </li>
            <li>
              <Link to='/animeCategorie'>Categories ^</Link>
            </li>
            <li>
              <Link to='/blog'>Our bloc</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
          <section className="conteiner">
            <button>
              {/* <img src={search} alt="Icone de busca" className="search" /> */}
              <p>P</p>
            </button>
            <Link to='/login'>
              {/* <img src={search} alt="Icone de busca" className="login" /> */}
              <p>L</p>
            </Link>
          </section>
        </nav>
      </div>
      </HeaderContainer>
  );
}
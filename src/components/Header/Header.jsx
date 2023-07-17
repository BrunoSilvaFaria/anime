import { HeaderContainer } from "./styles";
import { Link } from "react-router-dom";
import logo from "../logo.png";

import { IconUser, IconSearch } from "../../Icons";

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
              <IconSearch/>
            </button>
            <Link to='/login'>
              <IconUser/>
            </Link>
          </section>
        </nav>
      </div>
      </HeaderContainer>
  );
}
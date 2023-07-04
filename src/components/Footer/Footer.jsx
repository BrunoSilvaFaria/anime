import { FooterConteiner } from "./styles";
import logo from "../logo.png";
export default function Header() {
  return (
    <FooterConteiner>
        <footer>
          <div className="footer">
            <img src={logo} alt="Logo do site" />
            <nav>
              <ul className="list">
                <li className="link-active">
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">Categories </a>
                </li>
                <li>
                  <a href="#">Our bloc</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <p>
              Copyright ©2023 All rights reserved | This template is made with by <a>Colorlib</a>
            </p>
          </div>
        </footer>
      </FooterConteiner>
  );
}
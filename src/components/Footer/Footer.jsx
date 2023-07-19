import React from "react";
import { Link } from "react-router-dom";
import { FooterConteiner } from "./styles";
import { IconArrowUp } from '../../Icons'
import logo from "../logo.png";
export default function Header() {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
  return (
    <FooterConteiner>
      <button onClick={goToTop}>
        <IconArrowUp className="icon"/>
      </button>
          <section className="conteiner">
        <div className="footer">
              <Link to="/">
                <img src={logo} alt="Logo do site" />
              </Link>
              <nav>
                <ul className="list">
                  <li className="link-active">
                    <Link to="/">
                    Homepage
                    </Link>
                  </li>
                  <li>
                    <Link to="/animeCategorie">
                    Categories 
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                    Our bloc
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <p>
                Copyright ©2023 All rights reserved | This template is made with by <a>Colorlib</a>
              </p>
            </div>
          </section>
      </FooterConteiner>
  );
}
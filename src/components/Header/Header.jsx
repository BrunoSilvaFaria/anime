import { useState, useEffect } from "react";
import { HeaderContainer } from "./styles";
import { Link } from "react-router-dom";
import logo from "../logo.png";


import { IconUser, IconSearch, IconMenu } from "../../Icons";

export default function Header() {
  const [showElement, setShowElement] = useState(window.innerWidth >= 900);
  
  useEffect(() => {
    const handleResize = () => {
      setShowElement(window.innerWidth >= 990);
    };

    // Adiciona um listener para o evento de redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const showOrHide = () => {
    setShowElement((prevShowElement) => !prevShowElement);
  }
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (to, type='link') => {
    setActiveLink(to);
    if (window.innerWidth < 900 && type != "logo") {
      showOrHide();
    }
  };
 

  return (
    <HeaderContainer>
      <div>
        <nav>
          <Link to="/"
            onClick={() => { handleLinkClick('/', 'logo') }}
          >
            <img src={logo} alt="Logo do site" />
          </Link>

          {showElement && 
            <ul className="list">
              <li>
                <Link
                  to="/"
                  className={activeLink === '/' ? 'link-active' : ''}
                  onClick={() => { handleLinkClick('/')}}
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link
                  to="/animeCategorie"
                  className={activeLink === '/animeCategorie' ? 'link-active' : ''}
                  onClick={() => {handleLinkClick('/animeCategorie')}}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={activeLink === '/blog' ? 'link-active' : ''}
                  onClick={() => {handleLinkClick('/blog')}}
                >
                  Our bloc
                </Link>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            }

          <section className="conteiner">
            <button>
              <IconSearch/>
            </button>
            <Link to='/login'>
              <IconUser/>
            </Link>
          <section className="menu" onClick={showOrHide}>
            <button>
              <span>Menu</span>
            <IconMenu className="icon"/>
            </button>
          </section>
          </section>

        </nav>
      </div>
    </HeaderContainer>
  );
}
import React, { useState, useContext } from 'react';
import { DataContext } from "../../data/pageData";
import { Link } from 'react-router-dom'

import logo from "../../img/logo.png";
import logoMob from "../../img/logoMob.svg";
import sanduiche from "../../img/sanduiche.svg";

import br from "../../img/br.svg";
import us from "../../img/us.svg";

export default function Navbar() {

  const [isPortuguese, setIsPortuguese] = useState(true)
  const reactContext = useContext(DataContext)

  const english = reactContext.en;
  const portuguese = reactContext.pt;

  const lang = useContext(DataContext).lang;

  function changeLang() {
    setIsPortuguese(!isPortuguese)
    reactContext.setLang(isPortuguese ? english : portuguese);
  }

  return (
    <>
      <header>
        <div className="container">
          <Link className="logo-anchor" to="/">
            <img className="logo" alt="Logo" src={logo}></img>
            <img className="logoMob" alt="LogoMob" src={logoMob}></img>
          </Link>
          <nav>
            <ul>
              {
                lang.navbar.map((element, index) => {
                  return (
                    <li>
                      <Link to={element.link}> {element.name} </Link>
                    </li>
                  )
                })
              }
            </ul>

            <div className="dropdown">
              <a className="categ-btn" onClick={changeLang}>
                <img className="br" alt="br" src={isPortuguese ? br : us}></img>
                <span> <span className={isPortuguese ? "" : "invalid"}> PT </span> / <span className={!isPortuguese ? "" : "invalid"}>EN</span> </span>
              </a>
            </div>
          </nav>

          <div className="dropdown-mob">
            <button className="mobile-btn">
              <img className="sanduiche" alt="sanduiche" src={sanduiche}></img>
            </button>

            <div class="dropdown-content-mob">

              {
                lang.navbar.map((element, index) => {
                  return (
                    <Link to={element.link}> {element.name} </Link>
                  )
                })
              }

              <div className="sep-bar"></div>
              <a className="categ-btn" onClick={changeLang}>
                <img className="br" alt="br" src={isPortuguese ? br : us}></img>
                <span> <span className={isPortuguese ? "" : "invalid"}> PT </span> / <span className={!isPortuguese ? "" : "invalid"}>EN</span> </span>
              </a>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}

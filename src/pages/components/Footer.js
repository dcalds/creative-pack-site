import React, { useContext } from 'react';
import { DataContext } from "../../data/pageData";

import logoWhite from "../../img/logoWhite.png";
import insta from "../../img/insta.svg";
import linkedin from "../../img/linkedin.svg";

export default function Footer() {

  const lang = useContext(DataContext).lang;

  return (
    <>
      <footer>
        <div className="container">
          <div className="top">
            <div className="left-top">
              <img alt="Seta" src={logoWhite}></img>
              <p>contato@creativepack.org</p>
              <p className="address">
                Av. Daniel de la Touche, 1502 - Cohama, São Luís - MA, 65074-115
              </p>
            </div>
            <nav className="right-top">
              <div className="footer-nav-top">
                <h6>{lang.f1}</h6>
                <ul>
                  <li>
                    <a href="/">Home </a>
                  </li>
                  <li>
                    <a href="/lobos"> Lobos </a>
                  </li>
                  <li>
                    <a href="/jornadas"> Jornadas </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-top">
                <h6>{lang.f2}</h6>
                <ul>
                  <li>
                    <a href="https://staging-cp.herokuapp.com/"> Digital Builders </a>
                  </li>
                  <li>
                    <a href="/alcateia"> Alcateia </a>
                  </li>
                  <li>
                    <a href="/contato"> Contato </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-top">
                <h6>{lang.f3}</h6>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/creativepackbr/">
                      <img alt="Seta" src={insta}></img>
                      <span> Instagram </span>
                    </a>
                    <a href="https://www.linkedin.com/company/creativepackbr/">
                      <img alt="Seta" src={linkedin}></img>
                      <span> Linkedin </span>
                    </a>
                  </li>
                  {/* 
                  <li>
                    <a href="https://pt-br.facebook.com/rfprevestibulares/">
                      <img alt="Seta" src={face}></img>
                      <span> Facebook </span>
                    </a>
                  </li> 
                  */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </footer>

      <div className="end">
        <p>@2021 - Creative Pack - {lang.f4}</p>
      </div>
    </>
  );
}

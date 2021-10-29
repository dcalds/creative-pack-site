import React from 'react';

import icon1 from "../../img/icons/icon1.svg";
import icon2 from "../../img/icons/icon2.svg";
import icon3 from "../../img/icons/icon3.svg";
import icon4 from "../../img/icons/icon4.svg";
import separator from "../../img/icons/separator.svg";

export default function Bonus() {
    return (
      <section className="s-bonus">
        <div className="container">
            <div className="bonus-box">
            <img className="icon" alt="Icone" src={icon1}></img>
            <p className="text"> Acompanhamento Individual </p>
            </div>
            <img className="sep" alt="Icone" src={separator}></img>
            <div className="bonus-box">
            <img className="icon" alt="Icone" src={icon2}></img>
            <p className="text"> Simulados feitos Semanalmente </p>
            </div>
            <img className="sep" alt="Icone" src={separator}></img>
            <div className="bonus-box">
            <img className="icon" alt="Icone" src={icon3}></img>
            <p className="text"> Monitoria para matérias e redação </p>
            </div>
            <img className="sep" alt="Icone" src={separator}></img>
            <div className="bonus-box">
            <img className="icon" alt="Icone" src={icon4}></img>
            <p className="text"> Mentorias coletiva e lista de conteúdo </p>
            </div>
        </div>
    </section>
    )
}
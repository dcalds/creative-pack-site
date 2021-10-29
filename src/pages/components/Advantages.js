import React from 'react'

import i1 from "../../img/icons/i1.svg"
import i2 from "../../img/icons/i2.svg"
import i3 from "../../img/icons/i3.svg"
import i4 from "../../img/icons/i4.svg"
import i5 from "../../img/icons/i5.svg"
import i6 from "../../img/icons/i6.svg"

export default function Advantages() {
    return (
        <section id="advantages" className="s-advantages">
            
            <div className="container">

                <div className="left-box">

                    <div className="badge">Vantagens</div>
                    <h2>Tudo o que você precisa, está aqui</h2>
                    <p className="text"> A RF oferece diversos serviços, demonstrando de forma real o sucesso e a qualidade, construídos no decorrer dos anos. </p>

                </div>
                
                <div className="right-box">

                    <div className="box">
                        <img className="img-fluid box-image" src={i1} alt="icone" />
                        <p className="desc-text"> Acompanhamento Individual </p>
                    </div>

                    <div className="box">
                        <img className="img-fluid box-image" src={i2} alt="icone" />
                        <p className="desc-text"> Simulados feitos Semanalmente </p>
                    </div>

                    <div className="box">
                        <img className="img-fluid box-image" src={i3} alt="icone" />
                        <p className="desc-text"> Monitorias de cada matéria </p>
                    </div>

                    <div className="box">
                        <img className="img-fluid box-image" src={i4} alt="icone" />
                        <p className="desc-text"> Monitorias para redação </p>
                    </div>

                    <div className="box">
                        <img className="img-fluid box-image" src={i5} alt="icone" />
                        <p className="desc-text"> Mentorias coletivas específicas </p>
                    </div>

                    <div className="box">
                        <img className="img-fluid box-image" src={i6} alt="icone" />
                        <p className="desc-text"> Listas de conteúdos bem definidos </p>
                    </div>

                    <div className="box-button">
                        <a href="https://api.whatsapp.com/send?phone=559884988823&text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20os%20produtos%20RF&ltclid=860574b7-7ad3-48c3-a1b9-49af6fb772ba" rel="noreferrer" target="_blank" className="box-button-item">
                            Quero fazer parte agora
                        </a>
                    </div>

                </div>


            </div>

        </section>
    )
}
import React from 'react';

import arrowRight from "../../img/arrowRight.svg";

export default function ButtonCTA({color}) {
    return (
        <section id="squads" className="s-product-featured">
            
            <div className="container">

                <div className="cta-squads">
                    <a style={{backgroundColor: color}} href="https://api.whatsapp.com/send?phone=559891504939&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20um%20pouco%20mais%20sobre%20o%20digital%20builders%20" className="cta-main-button">
                        Saiba Mais
                        <img className="arrowRight" alt="arrowRight" src={arrowRight}></img>
                    </a>
                </div>

            </div>


        </section>
    )
}
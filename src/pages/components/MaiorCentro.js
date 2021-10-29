import React, { useContext } from 'react';
import { DataContext } from "../../data/pageData";

import logoBlack from "../../img/logoBlack.png"
import arrowRight from "../../img/arrowRight.svg"
import arrowRed from "../../img/arrowRed.png"
import imgWeb from "../../img/imgWeb.png"
import imgMob from "../../img/imgMob.png"

function MaiorCentro() {

    const lang = useContext(DataContext).lang;

    return (
        <section className="s-maiorcentro">
            <div className="container">

                {/* <div className="title-box">
                    <div className="title-box-left">
                        <img
                            className="icon-lobo img-fluid"
                            src={logoBlack}
                            alt="Lobo"
                        ></img>
                        <div className="box-title">
                            <h2 className="title-feat">
                                {lang.h5[0]}
                            </h2>
                            <h2 className="title-text">
                                {lang.h5[1]}
                            </h2>
                        </div>

                        <div className="gradient-bar"></div>
                    </div>
                </div>



                <div className="image-box">

                    <img
                        className="image-web img-fluid"
                        src={imgWeb}
                        alt="Lobo"
                    ></img>


                    <img
                        className="image-mob img-fluid"
                        src={imgMob}
                        alt="Lobo"
                    ></img>

                </div>

                <div className="button-box">

                    <a href="https://goo.gl/maps/dDULgLe27XgTPKGr9" className="button">
                        {lang.b5}
                        <img className="arrowRight" alt="arrowRight" src={arrowRed}></img>
                    </a>

                </div> */}









                <div className="contato-box">

                    <div className="divider-line" />

                    <div className="box">

                        <div className="decorator" />

                        <h2 className="title"> {lang.h5[2]} <span> {lang.h5[3]}</span> </h2>

                        <button
                            id="myBtn"
                            type="button"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                            className="button">
                            {lang.h5[4]}
                            <img className="arrowRight" alt="arrowRight" src={arrowRight}></img>
                        </button>

                    </div>

                    <div className="divider-line" />

                </div>

            </div>
        </section>
    );
}

export default MaiorCentro;

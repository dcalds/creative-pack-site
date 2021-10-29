import React, { useContext } from 'react';
import { DataContext } from "../../data/pageData";
import { Link } from 'react-router-dom';

import line from "../../img/line.svg";
import arrowRight from "../../img/arrowRight.svg";
import arrowWhite from "../../img/arrowWhite.svg";

import lobo from "../../img/lobo.svg"
import ic1 from "../../img/icons/ic1.png"
import ic2 from "../../img/icons/ic2.png"
import ic3 from "../../img/icons/ic3.png"

export default function ProductFeatured() {

    const lang = useContext(DataContext).lang;

    return (
        <>
            <section id="solutions" className="s-product-featured">

                <div className="container">

                    <div className="title-box">

                        <div className="title-box-left">

                            <img
                                className="icon-lobo img-fluid"
                                src={lobo}
                                alt="Lobo"
                            ></img>
                            <div className="box-title">
                                <h2 className="title-feat">
                                    {lang.h3[0]}
                                </h2>
                                <h2 className="title-text">
                                    {lang.h3[1]}
                                </h2>
                            </div>
                        </div>

                    </div>

                    <div className="content-box">

                        <div className="content-card">
                            <img
                                className="icon-card img-fluid"
                                src={ic1}
                                alt="Card Icon"
                            ></img>

                            <h6> {lang.card1.title} </h6>

                            <p> {lang.card1.desc}  </p>

                            <Link to={lang.card1.link} > {lang.card1.know}
                                <img
                                    className="arrowWhite img-fluid"
                                    src={arrowWhite}
                                    alt="Card Icon"
                                ></img>
                            </Link>

                        </div>

                        <div className="content-card">
                            <img
                                className="icon-card img-fluid"
                                src={ic2}
                                alt="Card Icon"
                            ></img>

                            <h6> {lang.card2.title} </h6>

                            <p> {lang.card2.desc}  </p>

                            <a href={lang.card2.link} > {lang.card2.know}
                                <img
                                    className="arrowWhite img-fluid"
                                    src={arrowWhite}
                                    alt="Card Icon"
                                ></img>
                            </a>

                        </div>

                        <div className="content-card">
                            <img
                                className="icon-card img-fluid"
                                src={ic3}
                                alt="Card Icon"
                            ></img>

                            <h6> {lang.card3.title} </h6>

                            <p> {lang.card3.desc}  </p>

                            <a href={lang.card3.link} > {lang.card3.know}
                                <img
                                    className="arrowWhite img-fluid"
                                    src={arrowWhite}
                                    alt="Card Icon"
                                ></img>
                            </a>

                        </div>
                    </div>

                    {/* <div className="cta-squads">
                    <a href="https://api.whatsapp.com/send?phone=559891504939&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20um%20pouco%20mais%20sobre%20o%20digital%20builders%20" className="cta-main-button">
                        Saiba Mais
                        <img className="arrowRight" alt="arrowRight" src={arrowRight}></img>
                    </a>
                </div> */}

                </div>
            </section>

        </>
    )
}
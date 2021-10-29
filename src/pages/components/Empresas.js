import React, { useContext } from 'react';
import { DataContext } from "../../data/pageData";

import wolf from "../../img/wolf.png"

import l1 from "../../img/l1.png"
import l2 from "../../img/l2.png"
import l3 from "../../img/l3.png"
import l4 from "../../img/l4.png"
import l5 from "../../img/l5.png"
import l6 from "../../img/l6.png" 

function Empresas() {

    const lang = useContext(DataContext).lang;

    return (
        <section className="s-empresas">
            <div className="container">

                <div className="title-box">

                    <div className="title-box-left">

                        <img
                            className="icon-lobo img-fluid"
                            src={wolf}
                            alt="Lobo"
                        ></img>
                        <div className="box-title">
                            <h2 className="title-feat">
                                {lang.h4[0]}
                            </h2>
                            <h2 className="title-text">
                                {lang.h4[1]}
                            </h2>
                        </div>
                    </div>

                </div>


                <div className="content-box">

                    <div className="content-card">
                        <img className="empresa" alt="empresa" src={l1}></img>
                    </div>

                    <div className="content-card">
                        <img className="empresa" alt="empresa" src={l2}></img>
                    </div>

                    <div className="content-card">
                        <img className="empresa" alt="empresa" src={l3}></img>
                    </div>

                    <div className="content-card">
                        <img className="empresa" alt="empresa" src={l4}></img>
                    </div>

                    <div className="content-card">
                        <img className="empresa" alt="empresa" src={l5}></img>
                    </div>

                    <div className="content-card">
                        <img className="empresa" alt="empresa" src={l6}></img>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Empresas;

import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../data/pageData";

import Navbar2 from "../components/Navbar2";

import BannerImage from "../secComponents/BannerImage";
import arrowRight from "../../img/arrowRight.svg";

import Footer from "../components/Footer";

import lobo1 from "../../img/lobo1.svg"

import dbuilders from "../../img/dbuilders.png";
import dbuildersmob from "../../img/dbuildersmob.png";
import ic1 from "../../img/ic1.png";
import ic2 from "../../img/ic2.png";
import ic3 from "../../img/ic3.png";

import arrowDown2 from "../../img/arrowDown2.png";

function Digital() {

  const lang = useContext(DataContext).lang;

  return (
    <>
      <Navbar2 color={"#C94661"} />

      <BannerImage title={lang.db.h1} desc={lang.db.h2} />

      <section className="s-product-featured">

        <div id="dbuilders" className="container centerContainer">

          <div className="title-box">

            <div className="title-box-left">

              <img
                className="icon-lobo img-fluid"
                src={lobo1}
                alt="Lobo"
              ></img>
            </div>

          </div>

          <p className="text-desc w-550">
            {lang.db.h3}
          </p>

          <img
            className="webImg img-fluid"
            src={dbuilders}
            alt="dbuilders"
          ></img>

          <img
            className="mobImg img-fluid"
            src={dbuildersmob}
            alt="dbuilders"
          ></img>

          <div className="db-container">

            <div className="item">
              <img
                className="icon img-fluid"
                src={ic1}
                alt="dbuilders"
              ></img>
              <p className="title">{lang.db.icons[0].title}</p>
              <p className="desc">{lang.db.icons[0].desc}</p>

              <button
                id="myBtn"
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="button">
                {lang.db.cta}
                <img
                  className="arrowRight"
                  alt="arrowRight"
                  src={arrowRight}
                ></img>
              </button>
              <img
                className="down"
                alt="Down"
                src={arrowDown2}
              ></img>
            </div>



            <div className="item">
              <img
                className="icon img-fluid"
                src={ic2}
                alt="dbuilders"
              ></img>
              <p className="title">{lang.db.icons[1].title}</p>
              <p className="desc">{lang.db.icons[1].desc}</p>

              <button
                id="myBtn"
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="button">
                {lang.db.cta}
                <img
                  className="arrowRight"
                  alt="arrowRight"
                  src={arrowRight}
                ></img>
              </button>
              <img
                className="down"
                alt="Down"
                src={arrowDown2}
              ></img>
            </div>

            <div className="item">
              <img
                className="icon img-fluid"
                src={ic3}
                alt="dbuilders"
              ></img>
              <p className="title">{lang.db.icons[2].title}</p>
              <p className="desc">{lang.db.icons[2].desc}</p>

              <button
                id="myBtn"
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="button">
                {lang.db.cta}
                <img
                  className="arrowRight"
                  alt="arrowRight"
                  src={arrowRight}
                ></img>
              </button>
            </div>

          </div>

        </div>


      </section>

      <Footer />
    </>
  );
}

export default Digital;

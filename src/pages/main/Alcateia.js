import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../data/pageData";

import Navbar2 from "../components/Navbar2";

import BannerImage from "../secComponents/BannerImage";

import Footer from "../components/Footer";
import arrowRight from "../../img/arrowRight.svg";

import logo from "../../img/logo.png";
import imageLogo1 from "../../img/imageLogo1.png";

import i1 from "../../img/i1.png";
import i2 from "../../img/i2.png";
import i3 from "../../img/i3.png";

import imgBig3 from "../../img/imgBig3.png";
import imgBig4 from "../../img/imgBig4.png";

function Alcateia() {

  const lang = useContext(DataContext).lang;

  return (
    <>
      <Navbar2 color={"#C94661"} />

      <BannerImage title={lang.alc[0]} />

      <div className="container">
        <div className="box3">
          <p className="text-desc">
            {lang.alcTxt1}
          </p>
          <p className="text-desc">
            {lang.alcTxt2}
          </p>
        </div>
      </div>

      <div className="container-fluid2">
        <img className="logo" alt="logo" src={logo}></img>
        <p className="quote">
          {lang.alc[1]}
          <span> {lang.alc[2]} </span>
        </p>
        <div
          className="gradient-bar"
          style={{ height: "5px", maxWidth: "310px", width: "100%" }}
        ></div>
      </div>

      <div className="container">
        <div className="main-box" >
          <div className="box4">
            <img className="imgBig img-fluid" alt="imgBig" src={imgBig3}></img>
            <img
              className="imgSmall img-fluid"
              alt="imgBig"
              src={imgBig3}
            ></img>
            <div className="desc">
              <div
                style={{
                  height: "5px",
                  maxWidth: "72px",
                  width: "100%",
                  backgroundColor: "#C94661",
                }}
              ></div>
              <p className="title-box"> {lang.alcMission.title} </p>
              <p className="text-desc2">
                {lang.alcMission.desc}
              </p>
            </div>
          </div>
          <div className="box4">
            <img
              className="imgSmall img-fluid"
              alt="imgBig"
              src={imgBig4}
            ></img>
            <div className="desc">
              <div
                style={{
                  height: "5px",
                  maxWidth: "72px",
                  width: "100%",
                  backgroundColor: "#C94661",
                }}
              ></div>
              <p className="title-box"> {lang.alcVision.title} </p>
              <p className="text-desc2">
                {lang.alcVision.desc}
              </p>
            </div>
            <img className="imgBig img-fluid" alt="imgBig" src={imgBig4}></img>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contato-box">
          <div className="divider-line" />

          <div className="box">
            <div className="decorator" />

            <h2 className="title">
              {lang.alcStart[0]}
            </h2>

            <button
              id="myBtn"
              type="button"
              data-bs-toggle="modal" data-bs-target="#exampleModal"
              className="button">
              {lang.alcStart[1]}
              <img
                className="arrowRight"
                alt="arrowRight"
                src={arrowRight}
              ></img>
            </button>
          </div>

          <div className="divider-line" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Alcateia;

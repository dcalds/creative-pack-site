import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../data/pageData";

import Navbar2 from "../components/Navbar2";

import BannerImage from "../secComponents/BannerImage";

import Footer from "../components/Footer";
import arrowRight from "../../img/arrowRight.svg";
import greenArrow from "../../img/greenArrow.svg";

import logo from "../../img/logo.png";
import imgContato from "../../img/imgContato.png";

import i1 from "../../img/i1.png";
import i2 from "../../img/i2.png";
import i3 from "../../img/i3.png";

function Contato() {

  const lang = useContext(DataContext).lang; 

  return (
    <>
      <Navbar2 color={"#C94661"} />

      <BannerImage title={lang.cnt[0]} />

      <div className="container">
        <div className="main-box" style={{ marginTop: "4rem" }}>
          <div className="box">
            <div
              style={{
                height: "5px",
                maxWidth: "72px",
                width: "100%",
                backgroundColor: "#C94661",
              }}
            ></div>
            <p className="title-box-contato"> {lang.cnt[1]} </p>
            <p className="text-desc-contato"> {lang.cnt1[0]}  </p>
            <a href={lang.cnt1[2]} className="btn-contato">
              {lang.cnt1[1]}
              <img
                className="greenArrow"
                alt="greenArrow"
                src={greenArrow}
              ></img>
            </a>
            <p className="text-desc-contato"> {lang.cnt2[0]}  </p>
            <a href={lang.cnt2[2]} className="btn-contato">
              {lang.cnt2[1]}
              <img
                className="greenArrow"
                alt="greenArrow"
                src={greenArrow}
              ></img>
            </a>
            <p className="text-desc-contato"> {lang.cnt3[0]}  </p>
            <a href={lang.cnt3[2]} className="btn-contato">
              {lang.cnt3[1]}
              <img
                className="greenArrow"
                alt="greenArrow"
                src={greenArrow}
              ></img>
            </a>
          </div>
          <div className="box">
            <img className="logo" alt="logo" src={imgContato}></img>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contato;

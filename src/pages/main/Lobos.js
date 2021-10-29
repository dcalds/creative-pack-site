import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../data/pageData";

import Navbar2 from "../components/Navbar2";

import BannerImage from "../secComponents/BannerImage"

import Footer from "../components/Footer";
import arrowRight from "../../img/arrowRight.svg"

import logo from "../../img/logo.png"
import imageLogo1 from "../../img/imageLogo1.png"
import imageLogo2 from "../../img/imageLogo2.png"

import i1 from "../../img/i1.png"
import i2 from "../../img/i2.png"
import i3 from "../../img/i3.png"

function Lobos() {

  const lang = useContext(DataContext).lang;
  
  return (
    <>
      <Navbar2 color={"#C94661"} />

      <BannerImage title={lang.wolf1[0]} desc={lang.wolf1[1]} />







      <div className="container">
        <div className="box1">
          <p className="page-title"> {lang.wolf2[0]} <span> {lang.wolf2[1]} </span> </p>

          <div className="icons-row">
            <div className="icon">
              <img className="arrowRight" alt="arrowRight" src={i1}></img>
              <p> {lang.wolf3[0]} </p>
            </div>
            <div className="icon">
              <img className="arrowRight" alt="arrowRight" src={i2}></img>
              <p> {lang.wolf3[1]} </p>
            </div>
            <div className="icon">
              <img className="arrowRight" alt="arrowRight" src={i3}></img>
              <p> {lang.wolf3[2]} </p>
            </div>
          </div>

          <button
                id="myBtn"
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="button">
            <p className="mt-3"> {lang.wolf3[3]} </p>
            <img className="arrowRight" alt="arrowRight" src={arrowRight}></img>
          </button>
        </div>
      </div>








      <div className="container-fluid2">
        <img className="logo" alt="logo" src={logo}></img>
        <p className="quote">
          {lang.alc[1]}
          <span> {lang.alc[2]} </span>
        </p>
        <div className="gradient-bar" style={{ height: "5px", maxWidth: "310px", width: "100%" }}></div>
      </div>





      <div className="container">

        <div className="main-box">
          <div className="box">
            <div style={{ height: "5px", maxWidth: "72px", width: "100%", backgroundColor: "#C94661" }}></div>
            <p className="title-box"> {lang.wolf4[0]} </p>
            <img className="logo" alt="logo" src={imageLogo1}></img>
          </div>
          <div className="box">
            <div style={{ height: "5px", maxWidth: "72px", width: "100%", backgroundColor: "#C94661" }}></div>
            <p className="title-box"> {lang.wolf4[1]} </p>
            <img className="logo" alt="logo" src={imageLogo2}></img>
          </div>
        </div>

      </div>










      <div className="container">
        <div className="contato-box">

          <div className="divider-line" />

          <div className="box">

            <div className="decorator" />

            <h2 className="title"> {lang.wolf5[0]} <span>{lang.wolf5[1]}</span> </h2>

            
            <button
                id="myBtn"
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="button">
            {lang.wolf5[2]}
              <img className="arrowRight" alt="arrowRight" src={arrowRight}></img>
            </button>

          </div>

          <div className="divider-line" />

        </div>
      </div>







      <Footer />
    </>
  );
}

export default Lobos;

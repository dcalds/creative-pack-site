import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../data/pageData";

import Navbar2 from "../components/Navbar2";

import BannerImage from "../secComponents/BannerImage"

import Footer from "../components/Footer";

import arrowRight from "../../img/arrowRight.svg"
import jrny from "../../img/jrny.png"

import imgBig1 from "../../img/imgBig1.png"
import imgBig2 from "../../img/imgBig2.png"


import mentor1 from "../../img/mentor1.jpg"
import mentor2 from "../../img/mentor2.jpg"
import mentor3 from "../../img/mentor3.jpg"

function Jornadas() {

  const lang = useContext(DataContext).lang; 

  return  (
    <>
      <Navbar2 color={"#288284"} />

      <BannerImage title={lang.jrny[0]} />


      <div className="container">
        <div className="box1">
          <p className="page-title"> {lang.jrny[1]} <span> {lang.jrny[2]} </span> </p>

          <img className="img-fluid journey-icon" alt="imgBig" src={jrny}></img>
          <p className="text-desc"> {lang.jrny1} </p>
          <div className="gradient-bar" style={{ height: "5px", maxWidth: "310px", width: "100%" }}></div>

          <p className="page-title"> {lang.jrny2} </p>

        </div>
      </div>





      <div className="container">

        <div className="main-box" style={{ marginTop: "0px" }}>

          <div className="box2">
            
            <div className="desc">
              <div style={{ height: "5px", maxWidth: "72px", width: "100%", backgroundColor: "#288284" }}></div>
              <p className="title-box"> 1 </p>
              <p className="text-desc2 text-desc22 "> {lang.j1} </p>
            </div>
            
            <div className="desc">
              <div style={{ height: "5px", maxWidth: "72px", width: "100%", backgroundColor: "#288284" }}></div>
              <p className="title-box"> 2 </p>
              <p className="text-desc2 text-desc22 "> {lang.j2} </p>
            </div>
            
            <div className="desc">
              <div style={{ height: "5px", maxWidth: "72px", width: "100%", backgroundColor: "#288284" }}></div>
              <p className="title-box"> 3 </p>
              <p className="text-desc2 text-desc22 "> {lang.j3} </p>
            </div>
            
            <div className="desc">
              <div style={{ height: "5px", maxWidth: "72px", width: "100%", backgroundColor: "#288284" }}></div>
              <p className="title-box"> 4 </p>
              <p className="text-desc2 text-desc22 "> {lang.j4} </p>
            </div>
            
            <div className="desc">
              <div style={{ height: "5px", maxWidth: "72px", width: "100%", backgroundColor: "#288284" }}></div>
              <p className="title-box"> 5 </p>
              <p className="text-desc2 text-desc22 "> {lang.j5} </p>
            </div>

          </div>

        </div>

      </div>




      <div className="container">
        <div className="box1">
          <p className="page-title"> {lang.jrny5} </p>
          <div className="mentores">
            <img className="Mentor img-fluid" alt="Mentor" src={mentor1}></img>
            <img className="Mentor img-fluid" alt="Mentor" src={mentor2}></img>
            <img className="Mentor img-fluid" alt="Mentor" src={mentor3}></img>
          </div>
        </div>
      </div>










      <div className="container">
        <div className="contato-box">
          <div className="divider-line" />
          <div className="box">
            <div className="decorator" style={{ backgroundColor: "#288284" }} />
            <h2 className="title"> {lang.jrny6[0]} <span> {lang.jrny6[1]} </span> </h2>
            <button
                id="myBtn"
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="button" style={{ backgroundColor: "#288284" }}>
              {lang.jrny6[2]}
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

export default Jornadas;

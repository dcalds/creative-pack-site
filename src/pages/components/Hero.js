import React, { useContext } from 'react';

import { DataContext } from "../../data/pageData";

import arrowRight from "../../img/arrowRight.svg"
import arrowDown from "../../img/arrowDown.png"
import i1 from "../../img/icons//i1.svg"
import i2 from "../../img/icons//i2.svg"
import i3 from "../../img/icons//i3.svg"

const pageData = {
  bannerImage: "url(https://i.ibb.co/n32G8Qf/bgmain.png) #555",
  bannerImageMob: "url(https://i.ibb.co/n32G8Qf/bgmain.png)",
  bannerPromo: "/",
};

export default function Hero() {

  const lang = useContext(DataContext).lang;

  return (

    <section className="s-hero">

      <div
        className="container-fluid container-web"
        style={{
          background: pageData.bannerImage,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="clickabeBanner container">

          <div className="gradient-bar"></div>

          <h1 className="title-feat animate__animated animate__fadeInLeft">
            {lang.h1hero[0]}
          </h1>
          <h1 className="title-main animate__animated animate__fadeInLeft">
            {lang.h1hero[1]}
          </h1>

          <div className="hero-icons">
            <div className="hero-icon">
              {lang.s1hero[0]} <br />
              {lang.s1hero[1]}
            </div>
          </div>

          <button
            id="myBtn"
            type="button"
            data-bs-toggle="modal" data-bs-target="#exampleModal"
            className="cta-main-button"
          >
            {lang.btHero}
            <img className="arrowRight" alt="arrowRight" src={arrowRight}></img>
          </button>

          <a href="/#solutions" className="cta-main-button-alt">
            <img className="arrowRight" alt="arrowRight" src={arrowDown}></img>
            <span >{lang.btAltHero}</span>
          </a>

        </div>
      </div>

      <div
        className="container-fluid container-mob"
        style={{
          background: pageData.bannerImageMob,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="clickabeBanner container">

          <div className="gradient-bar"></div>

          <h1 className="title-feat">
            {lang.h1hero[0]}
            <span className="title-main "> {lang.h1hero[1]} </span>
          </h1>

          <div className="hero-icons">
            <div className="hero-icon text-center">
              {lang.s1hero[0]} <br />
              {lang.s1hero[1]}
            </div>
          </div>

          <button
            id="myBtn"
            type="button"
            data-bs-toggle="modal" data-bs-target="#exampleModal"
            className="cta-main-button">
            {lang.btHero}
            <img className="arrowRight" alt="arrowRight" src={arrowRight}></img>
          </button>

          <a href="/#solutions" className="cta-main-button-alt">
            <img className="arrowRight" alt="arrowRight" src={arrowDown}></img>
            <span>{lang.btAltHero}</span>
          </a>

        </div>

      </div>

    </section>
  )
}
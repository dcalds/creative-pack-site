import React, { useContext } from 'react';
import { DataContext } from "../../data/pageData";

import arrowRight from "../../img/arrowRight.svg"
import sep from "../../img/sep.svg"

import ico1 from "../../img/icons/ico1.svg"
import ico2 from "../../img/icons/ico2.svg"
import ico3 from "../../img/icons/ico3.svg"

import workModel from "../../img/workModel.jpg"
import workModelMob from "../../img/workModelMob.jpg"

export default function KnowMore() {

  const lang = useContext(DataContext).lang;

  return (
    <section id="modelo" className="s-know-more">
      <div className="container">

        <div className="about-square">
          <img className="img-fluid workModelMob" src={workModelMob} alt="CP Work Model"></img>
          <img className="img-fluid workModel" src={workModel} alt="CP Work Model"></img>

          <div className="feat-box">

            <div className="box">
              <div className="box-title">
                <h2 className="title-feat">
                  {lang.h2[0]}
                </h2>
                <h2 className="title-text">
                  {lang.h2[1]}
                </h2>
              </div>
            </div>

            <div className="box">
              <img className="img-fluid box-image" src={ico1} alt="Nutrilight"></img>
              <div className="box-text">
                <h6>{lang.ico1.title}</h6>
                <p>{lang.ico1.desc}</p>
              </div>
            </div>

            <div className="box">
              <img className="img-fluid box-image" src={ico2} alt="Nutrilight"></img>
              <div className="box-text">
                <h6>{lang.ico2.title}</h6>
                <p>{lang.ico2.desc}</p>
              </div></div>

            <div className="box">
              <img className="img-fluid box-image" src={ico3} alt="Nutrilight"></img>
              <div className="box-text">
                <h6>{lang.ico3.title}</h6>
                <p>{lang.ico3.desc}</p>
              </div>
            </div>

            <div className="box">
              <img className="img-fluid box-image" src={sep}
                alt="Nutrilight"></img>
            </div>

            <div className="box">
              <button
                id="myBtn"
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="cta-main-button">
                {lang.b2}
                <img className="arrowRight" alt="arrowRight" src={arrowRight}></img>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
import React from 'react';
import ButtonCTA from "../components/ButtonCTA"

import concept from "../../img/concept.png"
import conceptM from "../../img/conceptM.png"

import product from "../../img/product.png"
import productM from "../../img/productM.png"

import business from "../../img/business.png"
import businessM from "../../img/businessM.png"

import sep1 from "../../img/sep1.png"
import sep2 from "../../img/sep2.png"
import sep3 from "../../img/sep3.png"

import ic1 from "../../img/icons/ic1.svg"
import ic2 from "../../img/icons/ic2.svg"
import ic3 from "../../img/icons/ic3.svg"

export default function SingleCategory() {
    return (
        <section className="s-single-category">

            <div className="container">
                
                <div id="concept" className="title-box">

                    <img className="title-icon" alt="Icone" src={ic1}></img>

                    <h2> <span>Concept</span> Builders</h2>

                    <img className="title-icon" alt="Icone" src={sep1}></img>

                    <p className="text-box"> 
                        Não existe desenvolvimento de negócio focado no cliente sem descobrir qual é a dor real 
                    </p>

                    <img className="image-box" alt="Icone" src={concept}></img>
                    <img className="image-box-mob" alt="Icone" src={conceptM}></img>

                </div>

                <ButtonCTA color={"#FFEA25"} ></ButtonCTA>
                
                
                <div  id="product" className="title-box">

                    <img className="title-icon" alt="Icone" src={ic2}></img>

                    <h2> <span>Product</span> Builders </h2>

                    <img className="title-icon" alt="Icone" src={sep2}></img>

                    <p className="text-box"> 
                        Um produto mínimo viável centrado na necessidade do usuário é o caminho para um projeto escalável
                    </p>

                    <img className="image-box" alt="Icone" src={product}></img>
                    <img className="image-box-mob" alt="Icone" src={productM}></img>

                </div>

                <ButtonCTA color={"#FF6F8D"}></ButtonCTA>
                
                <div  id="business" className="title-box">

                    <img className="title-icon" alt="Icone" src={ic3}></img>

                    <h2>  <span>Business</span> Builders </h2>

                    <img className="title-icon" alt="Icone" src={sep3}></img>

                    <p className="text-box"> 
                        Um negócio desenvolvido para atender melhor o mercado
                    </p>

                    <img className="image-box" alt="Icone" src={business}></img>
                    <img className="image-box-mob" alt="Icone" src={businessM}></img>

                </div>

                <ButtonCTA color={"#16BCBF"}></ButtonCTA>

            </div>
            
        </section>
    )
}
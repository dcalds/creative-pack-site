import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../data/pageData";

import Card from "../components/Card";
import arrow from "../../img/arrow.svg";

export default function SelectedProduct() {

    const response = useContext(DataContext).cardapio;
    const responseSliced = response.slice(1, 4);
  
    const { id } = useParams();
    
    return (
        <>
        <div className="style-bar" />

        <section className="s-featured">
        <div className="container container-special">
            <div className="product">
            <img className="product" alt="Produto" src={response[id].image}></img>
            <div className="product-info">
                <h2> {response[id].desc} </h2>

                <div className="desc">
                <div className="desc-item">
                    <span>INGREDIENTES</span>
                    <p>Frango com Shimeji – 100g</p>
                    <p>Cenoura ao Forno – 80g</p>
                </div>

                <div className="desc-item">
                    <span>CONSERVAÇÃO</span>
                    <p>Geladeira: 6 dias</p>
                    <p>Freezer: 6 meses</p>
                </div>
                </div>

                <div className="price">
                <p>
                    R$ <span>{response[id].priceLeft}</span>, {response[id].priceRight}
                </p>
                <a
                    className="price-button"
                    href={response[id].link}
                >
                    Finalizar pedido
                    <img className="arrow" alt="arrow" src={arrow}></img>
                </a>
                </div>
            </div>
            </div>

            <div className="info">
            <h2 className="title">Informação Nutricional</h2>

            <div className="separator-bar"></div>

            <p className="desc">
                Valores diários de referência com base em uma dieta de 2000 kcal
                ou 8400J. Seus valores diários podem ser maiores ou menores
                dependendo de suas necessidades energéticas. (**) VD não
                estabelecido
            </p>
            </div>

            <h3> Confira outras opções</h3>

            <div className="all-cards">
            {responseSliced.map((element, index) => {
                return (
                <Card
                    index={index}
                    image={element.image}
                    description={element.desc}
                    price={{ left: element.priceLeft, right: element.priceRight }}
                    link={element.link}
                    knowmore={element.knowmore}
                />
                );
            })}

            <div className="card"></div>
            </div>
        </div>
        </section>
    </>
    )
}
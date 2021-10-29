import React from "react";
import arrow from "../../img/arrow.svg";

export default function Card({image, description, price, link, knowmore, index}) {
  return (
    <div className="card" key={index}>
      <a href={`/${knowmore}`}>
        <img className="img-card" alt="Pedido" src={image}></img>
      </a>
      <div className="card-desc">
        <p>{description}</p>
      </div>
      <div className="card-bottom">
        <p>
          R$ <span>{price.left}</span>,{price.right}
        </p>
        <a className="buy-button" href={link}>
          Pedir agora
          <img className="arrow" alt="arrow" src={arrow}></img>
        </a>
      </div>
      <a className="know-more" href={`/${knowmore}`}>Saiba mais</a>
    </div>
  );
}

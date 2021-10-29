import React from "react";

export default function Testimonial({ name, desc, image, description }) {
  return (
    <div className="testimonial">
      <div className="box-image">
          {
              image ?
              <img className="people" alt="People" src={image}></img>
              : <></>
          }
          <div className="box-title">

            <h6>{name}</h6>
            <p>{desc}</p>

          </div>
      </div>
      <p>{description}</p>
    </div>
  );
}

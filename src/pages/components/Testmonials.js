import React, { useContext } from "react";
import { DataContext } from "../../data/pageData";
import Testimonial from "../components/Testimonial";

export default function Testmonials() {

    const testimonials = useContext(DataContext).testimonials;

    return (
      <section id="depoimentos" className="s-testimonials">
        <div className="container">
          {/* <div className="badge">depoimentos</div>
          <h2>Veja o que nossos clientes dizem</h2> */}



          <div className="title-box">

          <div className="title-box-left">

              <div className="badge"> Depoimentos </div>
              <h2> O que os nossos alunos dizem sobre nosso Ensino </h2>

          </div>

          <div className="title-box-right">

              {/* <p> Aulas produtivas, materiais de reforço e embasamento teórico. A plataforma é indispensável para os estudantes! </p> */}

          </div>

          </div>

          <div className="all-testimonials">
            {testimonials.map((element, index) => {
              return (
                <Testimonial
                  name={element.name}
                  desc={element.subtitle}
                  image={element.image}
                  description={element.desc}
                />
              );
            })}

            <div className="testimonial-block"></div>
          </div>
        </div>
      </section>
    )
}
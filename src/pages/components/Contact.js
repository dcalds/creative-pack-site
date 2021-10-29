import React from "react";

export default function Contact() {
  return (
    <section className="s-contact">
        <div className="container">

            <div className="card-contact">

                <div className="text-title">
                    <p> Ainda tem dúvidas? </p>
                    <h2> Entre em contato com nossa equipe de suporte </h2>
                </div>

                <div className="button-box">
                    <a href="https://api.whatsapp.com/send?phone=559884988823&text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20os%20produtos%20RF&ltclid=860574b7-7ad3-48c3-a1b9-49af6fb772ba" rel="noreferrer" target="_blank" className="button"> Entrar em contato </a>
                    <p> Ou se preferir, nos envie um email: </p>
                    <p className="text-bolder"> suporterfvestibulares@gmail.com </p>
                </div>

            </div>

        </div>
    </section>
  );
}

import React from 'react';

import authorImage from "../../img/authorImage.jpg"

export default function BannerImage() {
    return (
        <section id="sobre" className="s-quote"> 
            <div className="container-fluid">
                <div className="container">

                    <div className="quote-box">
                        <p className="quote-badge">
                            O QUE NOS FAZ DIFERENTE
                        </p>
                        <h2 className="quote">
                        “Nós da Creative Pack não vamos embora quando um problema aparece.”
                        </h2>
                        <p className="quote-author">
                            João Silva - CEO
                        </p>
                    </div>

                    <div className="quote-image">
                        <img className="author-image" alt="Quote Author" src={authorImage}></img>
                    </div>
                
                </div>

            </div>
      </section>
    )
}
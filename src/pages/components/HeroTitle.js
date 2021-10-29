import React from 'react';

export default function HeroTitle({title}) {
    
    return(
      <section className="s-banner">
        <div
          className="container-fluid"
          style={{
            background: "#339966",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1>{title}</h1>
        </div>
      </section>
    )
}
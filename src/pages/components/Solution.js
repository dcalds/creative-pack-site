import React from 'react';

export default function Solution({side, img, title, text}) {

    return (

        side === "left" ?

        <div className="left-side">

            <img className="img-fluid image-solution" src={img} alt="imagem"></img>

            <div className="text-box">
                <h3 className="title-solution"> {title} </h3>
                <p className="text-solution"> {text} </p>
            </div>
            
        </div>

        :

        <div className="right-side">

            <div className="text-box">
                <h3 className="title-solution"> {title} </h3>
                <p className="text-solution"> {text} </p>
            </div>
            
            <img className="img-fluid image-solution" src={img} alt="imagem"></img>
            
        </div>
    )
}
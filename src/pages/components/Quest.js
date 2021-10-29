import React from "react";
import faqArrow from "../../img/faqArrow.svg";

export default function Quest({ quest, answer }) {
  return (
    <div className="quest-box">
      <div className="quest">
        <p>{quest}</p>
        <img alt="Seta" src={faqArrow}></img>
      </div>

      <p className="answer">{answer}</p>
    </div>
  );
}

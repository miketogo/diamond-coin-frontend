import React from "react";



import './Gia.css';

import diamond from '../../../assets/images/gia/diamond.png'
import card1 from '../../../assets/images/gia/card1.png'
import card2 from '../../../assets/images/gia/card2.png'
import card3 from '../../../assets/images/gia/card3.png'
import card4 from '../../../assets/images/gia/card4.png'

const cards = [
  {
    icon: card1,
    title: "Carat weight",
    text: "2 carats",
  },
  {
    icon: card2,
    title: "Color grade",
    text: "Color K-V",
  },
  {
    icon: card3,
    title: "Clarity grade",
    text: "Cualitativo VVS",
  },
  {
    icon: card4,
    title: "Cut grade",
    text: "",
  },
]

function Gia() {


  return (
    <section className="gia">
      <h2 className="gia__title">Every diamond is <a target="_blank" rel="noreferrer" href="/#" className="gia__title-link">GIA certified</a> and owners can asses certification at any time</h2>
      <p className="gia__text">After diamond is produced it goes through GIA certification in order to assure its quality and get estimated price from bank insurance</p>
      <div className="gia__container">
        <img className="gia__diamond" src={diamond} alt="diamond" />
        <div className="gia__cards">
          {cards.map((item, i) => (
            <div className="gia__card" key={`gia__card${i}`}>
              <img className="gia__card-icon" src={item.icon} alt="card icon" />
              <h3 className="gia__card-title">{item.title}</h3>
              <p className="gia__card-text">{item.text}</p>
            </div>
          ))}


        </div>
      </div>

    </section>
  );
}

export default Gia;

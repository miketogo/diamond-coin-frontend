import React from "react";



import './HowItWorks.css';

import stage1 from '../../../assets/images/how-it-works/stage1.png'
import stage2 from '../../../assets/images/how-it-works/stage2.png'
import stage3 from '../../../assets/images/how-it-works/stage3.png'
import stage4 from '../../../assets/images/how-it-works/stage4.png'
import stage5 from '../../../assets/images/how-it-works/stage5.png'
import stage6 from '../../../assets/images/how-it-works/stage6.png'

const stages = [
  {
    img: stage1,
    title: "Diamonds production",
    text: "We produce diamonds using the HBAR  method and grow production by 5 carats every month",
  },
  {
    img: stage2,
    title: "GIA Certification",
    text: "After production diamonds moved to the bank vault and go triught GIA certification",
  },
  {
    img: stage3,
    title: "Price evaluation",
    text: "Based on the GIA cetification bank evaluates prices",
  },
  {
    img: stage4,
    title: "Bank vault",
    text: "Diamonds stored in a bank vault",
  },
  {
    img: stage5,
    title: "Minting",
    text: "Per each 1 carat we mint coins that can be exchanged for a real diamond",
  },
  {
    img: stage6,
    title: "Circulation",
    text: "Coins can be traded on echanges and used to hendge market risks and store value ",
  },

]



function HowItWorks() {


  return (
    <section className="how-it-works">
      <h2 className="how-it-works__title">How it works?</h2>
      <p className="how-it-works__text">On monthly basis we add new diamonds to the collateral<br />and mint new coins each 100 coins equals to 1 carat of colored diamond <span className="how-it-works__text-span">(K-V)</span><br />and with a minimum clarity of <span className="how-it-works__text-span">VVS</span></p>
      <div className="how-it-works__stages">
        {stages.map((item, i) => (
          <div className="how-it-works__stage" key={`how-it-works__stage${i}`}>
            <img className="how-it-works__stage-img" src={item.img} alt={`stage ${i+1}`} />
            <p className="how-it-works__stage-numeral">{`stage ${i+1}`}</p>
            <h3 className="how-it-works__stage-title">{item.title}</h3>
            <p className="how-it-works__stage-text">{item.text}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default HowItWorks;

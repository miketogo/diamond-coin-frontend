import React from "react";


import './Overview.css';

import diamond from '../../../assets/images/overview/diamond.png'
import coins from '../../../assets/images/overview/coins.png'
import wp from '../../../assets/files/BDR_WhitePaper.pdf'

import { Link } from "react-router-dom";

function Overview() {


  return (
    <section className="overview">
      <div className="overview__intro">
        <h2 className="overview__intro-title">Get yourself<br />
          <span className="overview__intro-title-text-span">a diamond
            <span className="overview__intro-title-span">

              <img className="overview__intro-title-diamond" src={diamond} alt="diamond" />
            </span>
          </span>
        </h2>
        <p className="overview__intro-text">BDR provides asset liquidity for the real dimond market by producing and tokenizing man-made dimonds. All produced diamonds are equal to each other enabling us to make each coin equal in its price.</p>
        <div className="overview__intro-links">
          <Link to="/technology" className="overview__intro-link">Read about our technology</Link>
          <a target="_blank" rel="noreferrer" href={wp} className="overview__intro-button">
            <p className="overview__intro-button-text">Read whitepaper</p>
          </a>
        </div>
      </div>
      <div className="overview__coin-cap">
        <p className="overview__coin-cap-title">Each BDR coin represents<br />the price of 1 carat</p>
        <img className="overview__coin-cap-img" src={coins} alt="coins" />
        <p className="overview__coin-cap-price">$14 000 = 2 BDR = 1 ct. diamond</p>
      </div>
    </section>
  );
}

export default Overview;

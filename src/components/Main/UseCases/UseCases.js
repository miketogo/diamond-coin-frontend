import React from "react";



import './UseCases.css';

import case1 from '../../../assets/images/use-cases/case1.png'
import case2 from '../../../assets/images/use-cases/case2.png'


function UseCases() {


  return (
    <section className="use-cases">
      <div className="use-cases__case">
        <img className="use-cases__case-img" src={case1} alt="case 1" />
        <h2 className="use-cases__case-title">Investors</h2>
        <p className="use-cases__case-text">Investors can get a stable and steady growing asset</p>
      </div>
      <div className="use-cases__case">
        <img className="use-cases__case-img" src={case2} alt="case 2" />
        <h2 className="use-cases__case-title">Custodian</h2>
        <p className="use-cases__case-text">Coin owners can exchange them for diamonds </p>
      </div>
    </section>
  );
}

export default UseCases;

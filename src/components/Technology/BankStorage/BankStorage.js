import React from "react";


import './BankStorage.css';

import vault from '../../../assets/images/bank-storage/bank-storage.png'
import shadow from '../../../assets/images/bank-storage/shadow.png'


function BankStorage() {


  return (
    <section className="bank-storage">
      <div className="bank-storage__vault">
        <img className="bank-storage__vault-image" src={vault} alt="vault" />
        <img className="bank-storage__vault-shadow" src={shadow} alt="shadow" />
      </div>
      <div className="bank-storage__texts">
        <h2 className="bank-storage__title">All produced diamonds are stored in a bank vault and can be redeemed with bought tokens</h2>
        <div className="bank-storage__list-items">
          <div className="bank-storage__list-item">
            <div className="bank-storage__list-marker"></div>
            <p className="bank-storage__list-text">BDR deposits produced diamonds in 5 Swees banks</p>
          </div>
          <div className="bank-storage__list-item">
            <div className="bank-storage__list-marker"></div>
            <p className="bank-storage__list-text">Each coin repreents 1 diamond carat</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BankStorage;

import React from "react";

import validator from 'validator'



import './Subscribe.css';



function Subscribe() {
  const [emailValue, setEmailValue] = React.useState('');
  const [emailValidity, setEmailValidity] = React.useState({});
  const [isSubmitted, setSubmitted] = React.useState(false);

  function handleEmailChange(e) {
    setSubmitted(false)
    setEmailValue(e.target.value);
    if (e.target.value.length <= 2) {
      setEmailValidity({
        errorMassage: '',
        validState: false
      })
    } else {
      if (validator.isEmail(e.target.value)) {
        setEmailValidity({
          errorMassage: '',
          validState: true
        })
      } else {
        setEmailValidity({
          errorMassage: (!e.target.validity.valid ? e.target.validationMessage : 'Введите валидный email'),
          validState: false
        })
      }
    }
  }

  function handleSubmit() {
    console.log(emailValue)
    setSubmitted(true)
  }

  return (
    <section className="subscribe">
      <div className="subscribe__container">
        <div className="subscribe__texts">
          <h2 className="subscribe__title">Don't want to miss anything?</h2>
          <p className="subscribe__text">Subscribe to our newsletter</p>
        </div>
        <div className="subscribe__inputs">
          <div className="subscribe__input-container">
            <input placeholder="your@email.please" className="subscribe__input" name="email" type="text" required value={emailValue} onChange={handleEmailChange} minLength="2" maxLength="30"></input>
          </div>
          <div className={`subscribe__submit-button ${emailValidity.validState && !isSubmitted ? 'subscribe__submit-button_ready' : ''} ${emailValidity.validState && isSubmitted ? 'subscribe__submit-button_submitted' : ''}`} onClick={() => {
            if (emailValidity.validState && !isSubmitted) handleSubmit()
            else return
          }}>
            {isSubmitted ?
              <svg className="subscribe__submit-icon" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28.5" stroke="white" strokeWidth="3" />
                <path d="M20 30.5556L25.9927 38.8275C26.4031 39.394 27.2534 39.3748 27.6379 38.7904L40 20" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </svg>

              :
              <p className="subscribe__submit-button-text">Subscribe</p>
            }


          </div>
        </div>

      </div>
    </section>
  );
}

export default Subscribe;

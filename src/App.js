import "./App.css";


function App() {
  return (
    <section className="main-container">
        <section className="left-container">
            <section className="card-front">
                 <section className="logo">
                    <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
                 </section>
                 <h1 className="cardNumber">9591 6489 6381 101E</h1>
                 <section className="name-expire-section">
                          <p className="customer-name">felicia leire</p>
                          <p className="expiry-date">09/22</p>
                 </section>
            </section>
            <section className="card-back">
                    <p className="cvc">101</p>
            </section>
        </section>
        <section className="right-container">
            <form className="userCardDetailsForm">
              <section className="cardHolderName-section">
                <label className="cardHolder-name" for="cardHolderName">cardholder Name</label>
                <input className="cardHolder-inputBox" type="text" placeholder="e.g. Jane Appleseed"/>
              </section>

              <section className="cardHoldercardNumber-section">
                <label className="cardHoldercardNumber-name" for="cardHoldercardNumber">card Number</label>
                <input className="cardHoldercardNumber-inputBox" type="text" placeholder="e.g. 1234 5678 9123 0000"/>
              </section>
              
              <section className="reminaingCardDetails">
              <section className="cardHolderdate-section">
                <label className="cardHolderdate" for="cardHolderdate">Exp.Date (MM/YY)</label>
                <section className="inputFieldsDate">
                    <input className="cardHolderdateMonth-inputBox" type="text" placeholder="MM"/>
                    <input className="cardHolderdateYear-inputBox" type="text" placeholder="YY"/>
                </section>
              </section>

              <section className="cardHolderCVC-section">
                <label className="cardHolderCVC-name" for="cardHolderCVC">CVC</label>
                <input className="cardHolderCVC-inputBox" type="text" placeholder="e.g. 123"/>
              </section>
              
              </section>
                  <button type="submit" className="btn">Confirm</button>
              
            </form>
        </section>
    </section>
  );
}
export default App;

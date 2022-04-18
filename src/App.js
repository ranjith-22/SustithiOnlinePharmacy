import logo from './MainLogo.svg';
import facebook from './akar-icons_facebook-fill.svg';
import twitter from './akar-icons_twitter-fill.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Header">
            <img src={logo} className = "logo"></img>
            <div className = "MainTitle">Sustithi Online Pharmacy</div>
            <div className = "SubTitle">(A venture by SR Dreamz Enterprises - Dealer of Sanjeevani)</div>
        </div>
        <div class="Allopathy"><p>Allopathy</p></div>
        <div class="Homeopathy"><p>Homeopathy</p></div>
        <div class="Ayurvedic"><p>Ayurvedic</p></div>
        <div class="Dental"><p>Dental</p></div>
        <div class="General"><p>General</p></div>
         
        <div class = "orderLine">Order online now all kinds of medicines at our online pharmacy</div>
        <div class = "deliveryLine">Get medicines delivered at your door steps within 24 hrs</div>

        <div class = "OrderProcess">
          <div class = "ellipse"></div>
          <div class = "ellipse"></div>
          <div class = "ellipse"></div>
        </div>
        <div class = "shopLine">One stop shop for all kind of medical products.Visit our store at Bellandur.</div>
        <div class = "storeAddress"> Address: Sanjeevani medical store, bellandur, Bengaluru</div>
        <div className="Footer">
        </div>
        <div class = "FooterLinks">
        <div class = "aboutUs">About us</div>
        <div  class = "facebook"><img src={facebook} class = "fb"></img>Facebook</div>
        <div  class = "twitter"><img src={twitter} class = "tw"></img>Twitter</div>
        <div  class = "feedback">Feedback</div>
        </div>
        <div class = "StoreDetails">Store address: Sanjeevani medical store Ballandur, Bangalore,<br></br> Owner: Sanjeeth Kumar, Ph no:</div>
      </div>
    </div>
  );
}

export default App;

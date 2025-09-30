import "./Home.css"
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import footerimage from "./footerimage.jpeg"
import BackToTop from "./backtotop.js"
function Membership() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
  return <div className="loginpage">
    <div className="loghead">
        <center><div className="correctlog">
                    <div className="logo"><img src={logo}/></div>
                    <div className="ctinfo"><h5 className="ph">+919443946541
                        
                    </h5>
                    <p>info@sriangaalammanmatrimony.com</p></div>
                    <div className="btns"><button className="headbt" onClick={() => navigate("/login")} >login</button>
                    <button className="headbt" onClick={() => navigate("/signup")}>register</button></div></div></center>
    </div>
    <div className="lognav"> <div className="navbar">
  <button className="hamburger" onClick={() => setAboutOpen(false) || setMenuOpen(!menuOpen)}>
    <i className="fa fa-bars"></i>
  </button>

  <div className={`nav-links ${menuOpen ? "show" : ""}`}>
    <button className="navbt" onClick={() => navigate("/")}>Home |</button>
    <button className="navbt" onClick={() => setAboutOpen(!aboutOpen)}>About Us</button>
    {aboutOpen && (
      <div className="dropdown-menu">
        <button className="dropdown-item" onClick={() => navigate("/faq")}>FAQs</button>
                <button className="dropdown-item" onClick={() => navigate("/terms")}>Terms & Conditions</button>
                <button className="dropdown-item" onClick={() => navigate("/privacy")}>Privacy Policy</button>
                <button className="dropdown-item" onClick={() => navigate("/refund")}>Refund Policy</button>
                <button className="dropdown-item"onClick={() => navigate("/disclaimer")}>Disclaimer</button>
                <button className="dropdown-item" onClick={() => navigate("/issue")}>Report Misuse</button>
                <button className="dropdown-item" onClick={() => navigate("/aboutus")}>About Us</button>
      </div>
    )}
    <button className="navbt" onClick={() => navigate("/signup")}>| Sign Up |</button>
    <button className="navbt" onClick={() => navigate("/search")}>Search |</button>
    <button className="navbt" onClick={() => navigate("/membership")}>Membership |</button>
    <button className="navbt" onClick={() => navigate("/success")}>Success |</button>
    <button className="navbt" onClick={() => navigate("/contactus")}>Contact</button>
  </div>
</div></div>
            <div className="repeatbg"></div>
            <div className="faqcon">
              <center><div  className="logtopic"><h1 className="faqtopic"><b>Membership</b></h1><h1 className="logu1">_______</h1><h1 className="logu2">_______</h1></div>
              </center>
              <div className="memberplan">
                <p><b>BASIC</b></p>
                <p className="strike"><b>INR:1200</b></p>
                <p><b>OFFER PRICE: 1000</b></p>
                <p><b>DAYS: UNLIM</b></p>
                <p>Profile Display</p>
                <p>Chating Option</p>
                <p>Express Interest</p>
                <p>Unlimited Profile Search</p>
                <p>Verified Phone Numbers</p>
                <p>Profile Up-gradation</p>
              </div>
              <div className="memberpay">
                <p><b>Allowed Contacts/Address: UNLIM</b></p>
                <button className="memberpaybtn" onClick={() => navigate("/login")}>Pay Now</button>
              </div>
            </div>
            <center><div className="bnkdtls">
                <h4>1.Bank Details </h4>
                <p>Bank Name - CITY UNION BANK SIVAGIRI </p>
                <p>Account Name -  S.P.SUBBIAH KAMALAKANNAN</p>
                <h1>   </h1>
                <p>Branch - Will be added soon</p>
                <p>Account No - 500101012409753</p>
                <p>IFSC CODE - CUIB0000636  </p>
                <p>Pin Code - 638109</p>
                <h1></h1>
                <h4>G-Pay: 9443946541 </h4>
            </div></center>
             
            <div className="end"><center><div className="endcontent"><div className="credits"><p>Sriangalammanmatrimony</p><img className="footerimage" src={footerimage}/></div>
                    <div className="gicontact">
                      <p className="getinc">Get In <b>Contact</b></p><p>If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.</p>
                      <div className="bookingaps"><p>Book Appointments</p></div>
                      <div className="emailreg"><input className="mailin" placeholder="enter your email"></input><button className="mailbt" type="submit">submit</button></div>
                      <div className="alldetails"><div><p>9629891299</p><p>info@sriangalammanmatrimony.com</p></div><div><p>FAQ</p><p>terms&Conditions</p></div></div>
                    </div>
                    </div></center>
                    <BackToTop />
                  </div>
                  <div className="branches1"><div className="cities">sriangalammanmatrimony.com Matrimony - muthaliyar matrimony ,, matrimony service in erode , coimbatore , tirupur, salem, all caste,</div><div className="socialmed"><button className="sobts"><i class="fa fa-facebook" aria-hidden="true"></i></button>
      <button className="sobts"><i class="fa fa-telegram" aria-hidden="true"></i></button>
      <button className="sobts"><i class="fa fa-twitter" aria-hidden="true"></i></button>
      <button className="sobts"><i class="fa fa-instagram" aria-hidden="true"></i></button></div></div>
  </div>;
}
export default Membership;

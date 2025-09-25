import "./Home.css"
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import footerimage from "./footerimage.jpeg"
function Disclaimer() {
    const navigate = useNavigate();
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
    <div className="lognav"><div className="navbar">
                <button className="navbt" onClick={() => navigate("/")}><i class="fa fa-home" aria-hidden="true"></i>Home  |</button>
                <button className="navbt" onClick={() => setAboutOpen(!aboutOpen)}>About Us
                </button>{aboutOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => navigate("/faq")}>FAQs</button>
                <button className="dropdown-item" onClick={() => navigate("/terms")}>Terms & Conditions</button>
                <button className="dropdown-item" onClick={() => navigate("/privacy")}>Privacy Policy</button>
                <button className="dropdown-item" onClick={() => navigate("/refund")}>Refund Policy</button>
                <button className="dropdown-item" onClick={() => navigate("/disclaimer")}>Disclaimer</button>
                <button className="dropdown-item" onClick={() => navigate("/issue")}>Report Misuse</button>
                <button className="dropdown-item"onClick={() => navigate("/aboutus")}>About Us</button>
              </div>
            )}
                <button className="navbt" onClick={() => navigate("/signup")}>|<i class="fa fa-sign-in" aria-hidden="true"></i>Sign Up  |</button>
                <button className="navbt" onClick={() => navigate("/search")}><i class="fa fa-search" aria-hidden="true"></i>Search  |</button>
                <button className="navbt" onClick={() => navigate("/membership")}><i class="fa fa-tags" aria-hidden="true"></i>Membership  |</button>
                <button className="navbt"><i class="fa fa-heart" aria-hidden="true"></i>Success story  |</button>
                <button className="navbt"><i class="fa fa-map-marker" aria-hidden="true"></i>Contact Us</button>
                


            </div></div>
            <div className="repeatbg"></div>
            <div className="faqcon">
              <center><div  className="logtopic"><h1 className="faqtopic"><b>Disclaimer</b></h1><h1 className="logu1">_______</h1><h1 className="logu2">_______</h1></div>
              <div className="faqpoints">
                <p>sriangalammanmatrimony.com is not responsible for any incorrect or inaccurate Content posted on the Site or in connection with the sriangalammanmatrimony.com Service, whether caused by users visiting the Site, Members or by any of the equipment or programming associated with or utilized in the Service, nor for the conduct of any user and/or Member of the sriangalammanmatrimony.com Service whether online or offline.sriangalammanmatrimony.com assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to, or alteration of, user and/or Member communications. sriangalammanmatrimony.com is not responsible for any problems or technical malfunction of any telephone network or lines, computer on-line-systems, servers or providers, computer equipment, software, failure of email or players on account of technical problems or traffic congestion on the Internet or at any website or combination thereof, including injury or damage to users and/or Members or to any other person's keralaweds related to or resulting from participating or downloading materials in connection with the sriangalammanmatrimony.com Site and/or in connection with the sriangalammanmatrimony.com Service. </p>
                <p>Under no circumstances will sriangalammanmatrimony.com be responsible for any loss or damage to any person resulting from anyone's use of the Site or the Service and/or any Content posted on the sriangalammanmatrimony.com Site or transmitted to sriangalammanmatrimony.com Members.</p>
                <p>The exchange of profile(s) through or by sriangalammanmatrimony.com Should not in any way be construed as any offer and/or recommendation from/by sriangalammanmatrimony.com sriangalammanmatrimony.com Shall not be responsible for any loss or damage to any individual arising out of, or subsequent to, relations established pursuant to the use of sriangalammanmatrimony.com The Site and the Service are provided "AS-IS AVALIABLE BASIS" and sriangalammanmatrimony.com expressly disclaims any warranty of fitness for a particular purpose or non-infringement. sriangalammanmatrimony.com cannot guarantee and does not promise any specific results from use of the Site and/or the sriangalammanmatrimony.com Service.</p>
              </div></center>
            </div>
             
            <div className="end"><center><div className="endcontent"><div className="credits"><p>Sriangalammanmatrimony</p><img className="footerimage" src={footerimage}/></div>
                    <div className="gicontact">
                      <p className="getinc">Get In <b>Contact</b></p><p>If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.</p>
                      <div className="bookingaps"><p>Book Appointments</p></div>
                      <div className="emailreg"><input className="mailin" placeholder="enter your email"></input><button className="mailbt" type="submit">submit</button></div>
                      <div className="alldetails"><div><p>9629891299</p><p>info@sriangalammanmatrimony.com</p></div><div><p>FAQ</p><p>terms&Conditions</p></div></div>
                    </div>
                    </div></center>
                  </div>
                  <div className="branches1"><div className="cities">sriangalammanmatrimony.com Matrimony - muthaliyar matrimony ,, matrimony service in erode , coimbatore , tirupur, salem, all caste,</div><div className="socialmed"><button className="sobts"><i class="fa fa-facebook" aria-hidden="true"></i></button>
      <button className="sobts"><i class="fa fa-telegram" aria-hidden="true"></i></button>
      <button className="sobts"><i class="fa fa-twitter" aria-hidden="true"></i></button>
      <button className="sobts"><i class="fa fa-instagram" aria-hidden="true"></i></button></div></div>
  </div>;
}
export default Disclaimer;

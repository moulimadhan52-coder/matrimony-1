import "./Home.css"
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import footerimage from "./footerimage.jpeg"
function Privacy() {
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
                <button className="dropdown-item"onClick={() => navigate("/privacy")}>Privacy Policy</button>
                <button className="dropdown-item"onClick={() => navigate("/refund")}>Refund Policy</button>
                <button className="dropdown-item" onClick={() => navigate("/disclaimer")}>Disclaimer</button>
                <button className="dropdown-item" onClick={() => navigate("/issue")}>Report Misuse</button>
                <button className="dropdown-item" onClick={() => navigate("/aboutus")}>About Us</button>
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
              <center><div  className="logtopic"><h1 className="faqtopic"><b>Privacy Policy</b></h1><h1 className="logu1">_______</h1><h1 className="logu2">_______</h1></div>
              <div className="faqpoints">
                <p>This electronic website is being operated and owned by <b>sriangalammanmatrimony.com</b>This PRIVACY POLICY STATEMENT is made/published in the internet web site to protect the user’s privacy and it is connected to our terms and conditions.</p>
                <p>A user/member, when he is entering our web site after accepting our full terms and conditions of sriangalammanmatrimony.com should provide the mandatory information, he has the option of not providing the information which is not mandatory. User/Member is solely responsible for maintaining confidentiality of the User Name/Identity and User Password and all activities and transmission/transactions performed by the User through his/her user identity/name and shall be solely responsible for carrying out any online or off-line transactions involving credit/debit cards or such other forms of instruments or documents for making such transactions. As such, while doing so any negligence of your act, sriangalammanmatrimony.com assumes no responsibility / liability for their improper use of information relating to such usage of credit/debit cards used by the subscriber online/offline.

</p>
<p>sriangalammanmatrimony.com is connected / link to service partners, such as servers/administrators. We may use your IP address and other information provided by like Email address, Contact name, User-created password, Address , Pin code, Telephone number or other contact number etc; to help diagnose problems with our server, and to manage our Web site. Your IP address may be also used to gather broad demographic information. And the information will be used by us to contact you and to deliver information to you that, in some cases, are targeted to your interests, such as targeted banner advertisements, administrative notices, product offerings, and communications relevant to your use of the web site. To receive such information, you accept for our terms and condition and privacy policy. </p>
<p>Unless otherwise you give your consent, it doesn’t sell, rent, share, trade or give away or share with any third party. The users who enter into site such as Builders, Agents/Brokers or any individual has provided their contact information for advertisement on our portal then users can contact them at their request through us. </p>
<p>Any changes in the privacy policy will be changed without any prior notice to any type of users, of our web site. We suggest you to review our privacy policy from time to time/ periodically, so as to see if any changes are made. </p>
<p>sriangalammanmatrimony.com cannot be held liable for any errors or inconsistencies. But we take every care to give you accuracy and clarity of the information. </p>
<p>sriangalammanmatrimony.com disclaims any and all responsibility or liability for the accuracy, content, completeness, legality, reliability, or operability or availability of information or material displayed on this web site by the third parties..</p>                
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
export default Privacy;

import "./Home.css"
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import footerimage from "./footerimage.jpeg"
import BackToTop from "./backtotop.js"
function Faq() {
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
    <div className="lognav"><div className="navbar">
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
              <center><div  className="logtopic"><h1 className="faqtopic"><b>FAQs</b></h1><h1 className="logu1">_______</h1><h1 className="logu2">_______</h1></div>
              <div className="faqpoints"><p><b>1.How can I register on sriangalammanmatrimony.com?</b></p>
              <p>Registering in our matrimony site is a simple process, you can register by filling the online registration  that runs for 3 pages or use the Quick registration form, a shorter and simpler process available </p>
              <p><b>2.I did my registration, but my profile does not show up online ?</b></p>
              <p>Every new profile will be validated by our ADMIN (Backend Team) and upon activation, your profile will be visible to all ! Verification of profiles is done manually. Our support team checks each and every profile carefully for any invalid or incorrect information and also candidates are contacted over the phone for confirmation of authority. You will get a notification once the profile is active ! </p>
              <p><b>3.Can I upload my photograph?</b></p>
              <p>You have the option of uploading your photograph on My Profile Page. You can upload a maximum of ten photographs.</p>
              <p><b>4.How do I upload Horoscope ?</b></p>
              <p>We have an exclusive interface to key in your horoscope details. Login to your Matrimony account and click Manage Horoscope.</p>
              <p><b>5.Can I edit all my details ?</b></p>
              <p>At any time, you can update your profile by clicking Modify My Profile button .</p>
              <p><b>6.I see a tab called MY MATCHES, What’s the use of it ?</b></p>
              <p>My Matches fetches the profiles matching your partner preferences that you keyed in while registering your profile. Its dynamically updated.</p>
              <p><b>7.Can I shortlist/bookmark a Profile ?</b></p>
              <p>Yes, you can ! Its an useful feature to make a note of the interested profiles. You need to be logged in to use the shortlist feature.</p>
              <p><b>8.How do I delete Shortlisted profiles?</b></p>
              <p>Login using your matrimonial "User ID" and "Password". Click on the "Shortlisted Profiles". You could view and delete the Bookmarked members!</p>
              <p><b>9.How do I change my password?</b></p>
              <p>After logging into your account, click on the change password link. The system will ask for your old password and then the new one then login with your new password.</p>
              <p><b>10.What are the benefits of a membership?</b></p>
              <p>Most trusted Matrimonial service</p>
              <p>100% verified Matrimonial profiles.</p>
              <p>Managed by Complete Professionals</p>
              <p>Dedicated Customer Care Service.</p>
              <p>Post your personal profile !</p>
              <p>Add more information about yourself and your family</p>
              <p>Upload/add multiple photographs to your profile</p>
              <p>Display your contact details to paid members</p>
              <p>Express interest in other members</p>
              <p>Why should I choose your paid membership package?</p>
              <p>A paid membership have various packages and options to help you access advanced features of  sriangalammanmatrimony.com</p>
              <p>Search suitable profile through matrimonial Website</p>
              <p>Contact suitable matches via contact number, personalized messages, and customer service.</p>
              <p>Send and receive personalized messages.</p>
              <p>Customer care support.</p>
              <p>Paid Matrimonial Members get top services.</p>
              <p>Paid Matrimonial Members can express interest and write messages to other members of sriangalammanmatrimony.com</p>
              <p><b>11.How can I upgrade my paid membership ?</b></p>
              <p>We provide various options for upgrading your membership. You can login to your matrimony account page and click upgrade button. Choose the right package for you, which will lead you to the payment page. You will be provided with various options for payment.</p>
              <p><b>12.How do I contact customer care ?</b></p>
              <p>sriangalammanmatrimony.com is eager to help you find your partner at the earliest. Customer Support is top priority to us. You can contact our customer care team in any of the following ways listed here.</p>
              <p></p></div></center>
            </div>
             
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
export default Faq;

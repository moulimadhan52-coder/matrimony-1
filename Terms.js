import "./Home.css"
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import footerimage from "./footerimage.jpeg"
function Terms() {
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
                    <button className="headbt">register</button></div></div></center>
    </div>
    <div className="lognav"><div className="navbar">
                <button className="navbt" onClick={() => navigate("/")}><i class="fa fa-home" aria-hidden="true"></i>Home  |</button>
                <button className="navbt" onClick={() => setAboutOpen(!aboutOpen)}>About Us
                </button>{aboutOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item">FAQs</button>
                <button className="dropdown-item">Terms & Conditions</button>
                <button className="dropdown-item">Privacy Policy</button>
                <button className="dropdown-item">Refund Policy</button>
                <button className="dropdown-item">Disclaimer</button>
                <button className="dropdown-item">Report Misuse</button>
                <button className="dropdown-item">About Us</button>
              </div>
            )}
                <button className="navbt">|<i class="fa fa-sign-in" aria-hidden="true"></i>Sign Up  |</button>
                <button className="navbt"><i class="fa fa-search" aria-hidden="true"></i>Search  |</button>
                <button className="navbt"><i class="fa fa-tags" aria-hidden="true"></i>Membership  |</button>
                <button className="navbt"><i class="fa fa-heart" aria-hidden="true"></i>Success story  |</button>
                <button className="navbt"><i class="fa fa-map-marker" aria-hidden="true"></i>Contact Us</button>
                


            </div></div>
            <div className="repeatbg"></div>
            <div className="faqcon">
              <center><div  className="logtopic"><h1 className="faqtopic"><b>Terms & Conditions</b></h1><h1 className="logu1">_______</h1><h1 className="logu2">_______</h1></div>
              <div className="faqpoints">
                <p>Welcome to sriangalammanmatrimony.com In order to use the <b>sriangalammanmatrimony.com</b></p>
                <p>Site ("Site"), you must Register as a member of the Site ("Member") and agree to be bound by these Terms of Use ("Agreement"). If you wish to become a Member and communicate with other Members and make use of the service ("Service"), read these Terms of Use and follow the instructions in the Registration process. This Agreement sets out the legally binding terms for your membership. This Agreement may be modified by sriangalammanmatrimony.com from time to time effective upon notice to you as a Member. Whenever there is a change in the Terms of Use, sriangalammanmatrimony.com will intimate you of such change. Your continued use of the Site pursuant to such change will constitute deemed acceptance of such changes.</p>
                <p><b>1. Eligibility</b></p>
              <p>You must be at least 18 years of age or over to Register as a member of sriangalammanmatrimony.com or use this Site. Membership to the Site is void where prohibited. Your use of this Site represents and warrants that you have the right, authority, and capacity to enter into this Agreement and to abide by all of the terms and conditions of this Agreement. This site is not meant to encourage and/or promote illicit sexual relations or extra marital affairs. If sriangalammanmatrimony.com discover or becomes aware that any member is using this site to promote or engage or indulge in illicit sexual relations or extra marital affairs his/her membership will be terminated forthwith without any refund and without any liability tor sriangalammanmatrimony.com . sriangalammanmatrimony.com 's discretion to terminate shall be final and binding.</p>
              <p><b>2. Term</b></p>
              <p>This Agreement will remain in full force and effect while you use the Site and/or are a Member of sriangalammanmatrimony.com. You may terminate your membership at any time, for any reason by informing sriangalammanmatrimony.com in writing to terminate your Membership. In the event you terminate your membership, you will not be entitled to a refund of any unutilized subscription fees. sriangalammanmatrimony.com may terminate your access to the Site and/or your membership for any reason which shall be effective upon sending notice of termination to you at the email address you provide in your application for membership or such other email address as you may later provide to sriangalammanmatrimony.com If sriangalammanmatrimony.com terminate your membership because of your breaching the Agreement, you will not be entitled to any refund of any unused Subscription fees. Even after this Agreement is terminated, certain provisions will remain in effect including sections 4,5,7,9 -12, inclusive, of this Agreement.</p>
              <p><b>3. Non-Commercial</b></p>
              <p>Use by Members sriangalammanmatrimony.com is for the personal use of individual members only, and may not be used in connection with any commercial endeavors. This includes providing links to other websites, whether deemed competitive to sriangalammanmatrimony.com or otherwise. Organizations, companies, and/or businesses may not become Members of sriangalammanmatrimony.com

and should not use the sriangalammanmatrimony.com Servic or Site for any purpose. Illegal and/or unauthorized uses of the Site, including unauthorized framing of or linking to the Site will be investigated, and appropriate legal action will be taken, including without limitation, civil, criminal, and injunctive redress.</p>
              <p><b>4. Other Terms of Use by Members.</b></p>
              <p>You may not engage in advertising to, or solicitation of, other Members to buy or sell any products or services through the Service. You will not transmit any chain letters or junk email to other sriangalammanmatrimony.com Members. Although sriangalammanmatrimony.com l cannot monitor the conduct of its Members on the sriangalammanmatrimony.com in Site, it is also a violation of this Agreement to use any information obtained from the Service in order to harass, abuse, or harm another person, or in order to contact, advertise to, solicit, or sell to any Member without their prior explicit consent. In order to protect sriangalammanmatrimony.com and/or our Members from any abuse/misuse, sriangalammanmatrimony.com reserves the right to restrict the number of communications/profile contacts & responses/emails which a Member may send to other Member(s) in any 24-hour period to a number which sriangalammanmatrimony.com deems appropriate in its sole discretion. You will not send any messages to other Members that are obscene, lewd, licentious, and defamatory, promote hatred and/or are racial or abusive in any manner. Transmission of any such messages shall constitute a breach of this Agreement and sriangalammanmatrimony.com Shall be entitled to terminate your membership for sriangalammanmatrimony.com reserves the right to screen messages that you may send to other Member(s) and also regulate the number of your chat sessions in its sole discretion.

You may not use any automated processes, including IRC Bots, EXE's, CGI or any other programs/scripts to view content on or communicate/contact/respond/interact with sriangalammanmatrimony.com and/or its Members</p>
              <p><b>5. Limitation on Liability.</b></p>
              <p>Except in jurisdictions where such provisions are restricted, in no event will sriangalammanmatrimony.com  liable to you or any third person for any indirect, consequential, exemplary, incidental, special or punitive damages, including also lost profits arising from your use of the Site or the sriangalammanmatrimony.com Service, even if sriangalammanmatrimony.com  has been advised of the possibility of such damages. Notwithstanding anything to the contrary contained herein, sriangalammanmatrimony.com , liability to you for any cause whatsoever, and regardless of the form of the action, will at all times be limited to the amount paid, if any sriangalammanmatrimony.com , for the Service during the term of membership.</p>
              <p><b>6. Other</b></p>
              <p>By becoming a Member of the Site / sriangalammanmatrimony.com Service, you agree to receive certain specific emails from sriangalammanmatrimony.com This Agreement, accepted upon use of the Site and further affirmed by becoming a Member of the sriangalammanmatrimony.com Service, contains the entire agreement between you and sriangalammanmatrimony.com regarding the use of the Site and/or the Service. If any provision of this Agreement is held invalid, the remainder of this Agreement shall continue in full force and effect.

You are under an obligation to report any misuse or abuse of the Site. If you notice any abuse or misuse of the Site or any thing which is in violation of this Agreement, you shall forthwith report such violation to sriangalammanmatrimony.com by writing to Customer Care. On receipt of such complaint, sriangalammanmatrimony.com  may investigate such complaint and if necessary may terminate the membership of the Member responsible for such violation abuse or misuse without any refund of subscription fee. Any false complaint made by a Member shall make such Member liable for termination of his / her membership without any refund of the subscription fee.</p>
              
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
export default Terms;

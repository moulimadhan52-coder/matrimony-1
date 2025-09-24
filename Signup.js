import "./Home.css"
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import footerimage from "./footerimage.jpeg"
function Signup() {
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
                <button className="dropdown-item" onClick={() => navigate("/faq")}>FAQs</button>
                <button className="dropdown-item" onClick={() => navigate("/terms")}>Terms & Conditions</button>
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
            <div className="logbackg"></div><center><div  className="logtopic"><h1 className="logtopic1"><b>Free Signup</b></h1><h1 className="logu1">_______</h1><h1 className="logu2">_______</h1></div></center>
              <center><div className="signbox">
                <div className="regcon"><p>First Name</p><input placeholder="first name" className="reginput1"></input></div><div className="regcon"><p>Surname</p><input placeholder="Surname" className="reginput1"></input></div>
                 <div className="regcon"><p>E-mail</p><input placeholder="Your E-mail" className="reginput1"></input></div><div className="regcon"><p>Set Password</p><input placeholder="Set Password" className="reginput1"></input></div>
                 <div className="regcon"><p>Matrimony Profile By</p><select className="reginput1"><option>Select</option>
                 <option>Self</option>
                 <option>Father</option>
                 <option>Mother</option>
                 <option>Brother</option>
                 <option>Sister</option>
                 <option>Friend</option>
                 <option>Son</option>
                 <option>Daughter</option>
                 <option>Others</option>
                 </select></div><div className="regcon"><p>Gender</p><select className="reginput1"><option>Select</option>
                 <option>Male</option>
                 <option>Female</option></select></div>
                 <div className="regcon"><p>Date Of Birth</p><select className="reginput2"><option>Select Date</option>
                 <option>01</option>
                 <option>02</option>
                 <option>03</option>
                 <option>04</option>
                 <option>05</option>
                 <option>06</option>
                 <option>07</option>
                 <option>08</option>
                 <option>09</option>
                 <option>10</option>
                 <option>11</option>
                 <option>12</option>
                 <option>13</option>
                 <option>14</option>
                 <option>15</option>
                 <option>16</option>
                 <option>17</option>
                 <option>18</option>
                 <option>19</option>
                 <option>20</option>
                 <option>21</option>
                 <option>22</option>
                 <option>23</option>
                 <option>24</option>
                 <option>25</option>
                 <option>26</option>
                 <option>27</option>
                 <option>28</option>
                 <option>29</option>
                 <option>30</option>
                 <option>31</option></select></div>
                 <div className="regcon"><p>Month</p><select className="reginput2"><option>Select Month</option>
                 <option>January</option>
                 <option>February</option>
                 <option>March</option>
                 <option>April</option>
                 <option>May</option>
                 <option>June</option>
                 <option>July</option>
                 <option>August</option>
                 <option>September</option>
                 <option>October</option>
                 <option>November</option>
                 <option>December</option></select></div>
                 <div className="regcon"><p>Year</p><select className="reginput2"><option>Select Year</option>
                 <option>2012</option>
                 <option>2011</option>
                 <option>2010</option>
                 <option>2009</option>
                 <option>2008</option>
                 <option>2007</option>
                 <option>2006</option>
                 <option>2005</option>
                 <option>2004</option>
                 <option>2003</option>
                 <option>2002</option>
                 <option>2001</option>
                 <option>2000</option>
                 <option>1999</option>
                 <option>1998</option>
                 <option>1997</option>
                 <option>1996</option>
                 <option>1995</option>
                 <option>1994</option>
                 <option>1993</option>
                 <option>1992</option>
                 <option>1991</option>
                 <option>1990</option>
                 <option>1989</option>
                 <option>1988</option>
                 <option>1987</option>
                 <option>1986</option>
                 <option>1985</option>
                 <option>1984</option>
                 <option>1983</option>
                 <option>1982</option>
                 <option>1981</option>
                 <option>1980</option>
                 <option>1979</option>
                 <option>1978</option>
                 <option>1977</option>
                 <option>1976</option>
                 <option>1975</option>
                 <option>1974</option>
                 <option>1973</option>
                 <option>1972</option>
                 <option>1971</option>
                 <option>1970</option>
                 <option>1969</option>
                 <option>1968</option>
                 <option>1967</option>
                 <option>1966</option>
                 <option>1965</option>
                 <option>1964</option></select></div>
                 <div className="regcon"><p>Religion</p><select className="reginput1"><option>Select</option>
                 <option>Hindu</option>
                 <option>Muslim</option>
                 <option>Christian</option>
                 <option>Sikh</option>
                 <option>Budhhism</option>
                 <option>Jain</option>
                 <option>Brahmin</option>
                 </select></div><div className="regcon"><p>Marital Status</p><select className="reginput1"><option>Select</option>
                 <option>Unmaried</option>
                 <option>Divorced</option>
                 <option>Widower</option>
                 <option>Widowed</option>
                 <option>Awaiting Divorce</option>
                 <option>Separated</option></select></div>
                 <div className="regcon"><p>Caste</p><select className="reginput1"><option>Select</option>
                 <option>Bramin</option>
                 <option>Devar</option>
                 <option>Gounder</option>
                 <option>Nadar</option>
                 <option>Nayakar</option>
                 <option>Pillai</option>
                 <option>Viswagarma</option>
                 <option>Chettiyar</option>
                 <option>Mudaliyar</option>
                 </select></div><div className="regcon"><p>SubCaste</p><input placeholder="Enter SubCaste" className="reginput1"></input></div>
                  <div className="regcon"><p>Country Code</p><select className="reginput1"><option>(+91)India</option>
                 <option>(+93)Afganisthan</option>
                 <option>(+355)Albania</option>
                 <option>(+213)Algeria</option>
                 <option>(+376)Andora</option>
                 <option>(+244)Angola</option>
                 <option>(+0)Antartica</option>
                 <option>(+54)Argentina</option>
                 <option>(+374)Armania</option>
                 <option>(+297)Aruba</option>
                 </select></div><div className="regcon"><p>Moubile Number</p><input placeholder="Enter Your Mobile Number" className="reginput1"></input></div>
                 <p className="mobverify">Verification code from sriangalammanmatrimony.com</p>
                 <div className="abouttext"><p>Enter Few Lines About Yourself</p><textarea placeholder="Enter Here" className="abtyrself"></textarea><input type="checkbox"></input>I agree to the terms of Service</div>
                 
              
              <button className="signsubmit">Login</button></div></center>
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
export default Signup;

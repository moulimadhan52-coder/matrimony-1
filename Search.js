import "./Home.css"
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import footerimage from "./footerimage.jpeg"
function Search() {
    const navigate = useNavigate();
    const educations = [
  "High School (10th)",
  "Higher Secondary (12th)",
  
  // Undergraduate Degrees
  "BA (Bachelor of Arts)",
  "BSc (Bachelor of Science)",
  "BCom (Bachelor of Commerce)",
  "BBA (Bachelor of Business Administration)",
  "BCA (Bachelor of Computer Applications)",
  "BTech (Bachelor of Technology)",
  "BE (Bachelor of Engineering)",
  "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
  "BPharm (Bachelor of Pharmacy)",
  "LLB (Bachelor of Law)",
  "BEd (Bachelor of Education)",
  
  // Postgraduate Degrees
  "MA (Master of Arts)",
  "MSc (Master of Science)",
  "MCom (Master of Commerce)",
  "MBA (Master of Business Administration)",
  "MCA (Master of Computer Applications)",
  "MTech (Master of Technology)",
  "ME (Master of Engineering)",
  "MD (Doctor of Medicine)",
  "MS (Master of Surgery)",
  "MPharm (Master of Pharmacy)",
  "LLM (Master of Laws)",
  "MEd (Master of Education)",
  
  // Professional Courses
  "CA (Chartered Accountant)",
  "CFA (Chartered Financial Analyst)",
  "CS (Company Secretary)",
  "ICWA (Cost & Management Accountant)",
  "PhD (Doctor of Philosophy)",
  "Diploma (Various Fields)",
  "ITI (Industrial Training Institute)",
  "Polytechnic"
];
const occupations = [
  // Business & Management
  "Business / Self Employed",
  "Entrepreneur",
  "Management Professional",
  "Marketing Professional",
  "Sales Professional",
  "HR Professional",

  // Finance & Legal
  "Accountant",
  "Banking Professional",
  "Chartered Accountant",
  "Company Secretary",
  "Financial Analyst",
  "Investment Professional",
  "Lawyer / Legal Professional",

  // IT & Technology
  "Software Engineer",
  "Hardware / Networking Professional",
  "IT Professional",
  "Web Designer / Animator",
  "Data Scientist",
  "AI / ML Engineer",

  // Medicine & Healthcare
  "Doctor",
  "Nurse",
  "Pharmacist",
  "Healthcare Professional",

  // Engineering & Technical
  "Engineer",
  "Civil Engineer",
  "Mechanical Engineer",
  "Electrical Engineer",
  "Architect",

  // Education & Research
  "Teacher",
  "Professor / Lecturer",
  "Research Scholar",
  "Scientist",

  // Media & Creative
  "Advertising / Media Professional",
  "Artist",
  "Actor / Actress",
  "Musician / Singer",
  "Writer / Journalist",
  "Designer",

  // Government & Defence
  "Government Employee",
  "Defence Personnel",
  "Civil Services (IAS / IPS / IFS)",
  "Police / Security Services",

  // Skilled Trades & Others
  "Agriculture",
  "Farmer",
  "Pilot",
  "Merchant Navy",
  "Hotel / Hospitality Professional",
  "Travel / Tourism Professional",
  "Social Worker",
  "Other"
];


    const [form, setForm] = useState({
    year: "",
    age: "",
    date: ""
  });

  
  const ages = Array.from({ length: 60 - 18 + 1 }, (_, i) => 18 + i);
 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
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
                <button className="dropdown-item"onClick={() => navigate("/disclaimer")}>Disclaimer</button>
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
            <div className="logbackg"></div><center><div  className="logtopic"><h1 className="logtopic1"><b>Regular Search</b></h1><h1 className="logu1">_______</h1><h1 className="logu2">_______</h1></div></center>
              <center><div className="searchbox">
                <div className="searchgender"><p>Gender</p><select className="srchgenin">
                    <option>looking for</option>
                    <option>Male</option>
                    <option>Female</option></select></div>
                    <div className="frmage"><p>From Age</p> <select
          name="age"
          value={form.age}
          onChange={handleChange}
          className="srchagein"
        >
          <option value="">From age</option>
          {ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select></div>
        <div className="frmage"><p>To age</p> <select
          name="age"
          value={form.age}
          onChange={handleChange}
          className="srchagein"
        >
          <option value="">To age</option>
          {ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select></div>
        <div className="searchgender"><p>Marital Status</p><select className="srchgeninmul" multiple>
                    <option>Unmaried</option>
                    <option>Separated</option>
                    <option>Widowed</option>
                    <option>Divorced</option>
                    <option>Any</option></select></div>

        
        <div className="searchgender"><p>Select Religion</p><select className="srchgeninmul1" multiple>
                    <option>Hindu</option>
                    <option>Muslim</option>
                    <option>Christian</option>
                    <option>Sikh</option>
                    <option>Budhism</option>
                    <option>Jain</option>
                    <option>Brahmin</option></select></div>  
                    <div className="searchgender"><p>Select Caste</p><select className="srchgeninmul1" multiple>
                    <option>Bramin</option>
                    <option>Devar</option>
                    <option>Goundar</option>
                    <option>Nadar</option>
                    <option>Nayakar</option>
                    <option>Pillai</option>
                    <option>Vishwagarma</option>
                    <option>Chettiyar</option>
                    <option>Mudhaliyar</option></select></div> 

                   <div className="searchgender"> <p>Select Education</p> <select className="srchgeninmul1" multiple>
  <option value="">-- Select Education --</option>
  {educations.map((edu) => (
    <option key={edu} value={edu}>
      {edu}
    </option>
  ))}
</select></div>
<div className="searchgender"> <p>Select Education</p><select className="srchgeninmul1" multiple>
  <option value="">-- Select Occupation --</option>
  {occupations.map((occ) => (
    <option key={occ} value={occ}>
      {occ}
    </option>
  ))}
</select></div>
<div className="searchcheck"><input className="srchchk" type="checkbox"></input>Any<p className="srchrule">Please use Ctrl+ for multiple selection</p></div>
<div className="searchcheck"><input className="srchchk" type="checkbox"></input>Any<p className="srchrule">Please use Ctrl+ for multiple selection</p></div>
<div className="searchcheck"><input className="srchchk" type="checkbox"></input>with Photo</div>
      
                
                 
              
              <button className="signsubmit">Search Profile</button></div></center>
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
export default Search;

import "./Home.css"
import logo from "./logo.png"
import banner4 from "./banner4.jpg"
const images = [
  "https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_12_08_54_05Screenshot_20250812_142116_Gallery.jpg&square=150",
  "https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_07_28_10_58_00IMG-20250216-WA0073.jpg&square=150",
  "https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_12_01_57_55Kishore1.jpg&square=150",
  "https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_04_03_49_56b3a3de26-2271-4729-980b-8351810b9d43.jpeg&square=150",
];
const photos = [
  "https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_12_08_54_05Screenshot_20250812_142116_Gallery.jpg&square=150",
  "https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_07_28_10_58_00IMG-20250216-WA0073.jpg&square=150",
  "https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_12_01_57_55Kishore1.jpg&square=150",
  "https://sriangalammanmatrimony.com/photoprocess.php?image=gallary/2025_08_04_03_49_56b3a3de26-2271-4729-980b-8351810b9d43.jpeg&square=150",
];

function Home(){
    return(
       <div className="body"> <div className="top">
        <div className="head">
            <div className="logo"><img src={logo}/></div>
            <div className="ctinfo"><h5 className="ph">+919443946541
                
            </h5>
            <p>info@sriangaalammanmatrimony.com</p></div>
            <div className="btns"><button className="headbt">login</button>
            <button className="headbt">register</button></div>
            
            </div>
            <div className="navbar">
                <button className="navbt"><i class="fa fa-home" aria-hidden="true"></i>Home  |</button>
                <button className="navbt"><i class="fa fa-user" aria-hidden="true"></i>About Us  |</button>
                <button className="navbt"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign Up  |</button>
                <button className="navbt"><i class="fa fa-search" aria-hidden="true"></i>Search  |</button>
                <button className="navbt"><i class="fa fa-tags" aria-hidden="true"></i>Membership  |</button>
                <button className="navbt"><i class="fa fa-heart" aria-hidden="true"></i>Success story  |</button>
                <button className="navbt"><i class="fa fa-map-marker" aria-hidden="true"></i>Contact Us</button>


            </div>
            <div className="backg"></div>
            <center><div className="selection">
                <div className="lfr">
                    <p>I'm looking for a</p>
                <select className="looking">
                    <option>Bride</option>
                    <option>groom</option>
                </select></div>
                <div className="lfr">
                    <p>From Age</p>
                <select className="looking">
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
                </select></div>
                <div className="lfr">
                    <p>From Age</p>
                <select className="looking">
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                </select></div>
                <div className="lfr">
                    <p>Religion</p>
                <select className="looking">
                    <option>Any</option>
                    <option>Hindu</option>
                    <option>Muslim</option>
                    <option>Christian</option>
                    <option>Sikh</option>
                    <option>Budhhism</option>
                    <option>Jain</option>
                    <option>Brahmin</option>
                </select></div>
                <div className="lfr">
                    <p>Religion</p>
                <select className="looking">
                    <option>Any</option>
                    <option>Bramin</option>
                    <option>Devar</option>
                    <option>Gounder</option>
                    <option>Nadar</option>
                    <option>Nayakar</option>
                    <option>Pillai</option>
                    <option>viswagarma</option>
                    <option>Chettiyar</option>
                    <option>Mudhaliyar</option>
                </select></div>
                <div className="sb"><button className="searchpt">Search Partner</button></div>

            </div>
            
            </center>
            
        </div>
         <footer className="footer">
        <div className="wp"><h1 className="welcome">WELCOME TO ANGALAMMAN MATRIMONT</h1>
        <p>Sriangalamman Matrimony, is one of India’s leading online premium matrimonial websites which will help thousands of all Community members find their perfect life partner.

Sriangalamman Matrimony  is the most trusted matrimony service for thousands who are in search of life partners in India & Worldwide.</p><a href="aj,zhxcas">...read more</a></div>
<div className="wi"><img src={banner4}/></div>

      </footer>
      <footer className="brg"><div className="b&g">
        <div><h1 className="prof">Brides & Grooms Profiles</h1><h1 className="u1">__________</h1><h1 className="u2">__________</h1></div> <div className="scroll-container">
      <div className="scroll-track">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Profile ${index}`} className="scroll-image" />
        ))}
        
        {images.map((src, index) => (
          <img key={index + images.length} src={src} alt={`Profile duplicate ${index}`} className="scroll-image" />
        ))}
      </div>
    </div></div>
    
      </footer>
    
            </div>
            
 )
}
export default Home;


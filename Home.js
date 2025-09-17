import "./Home.css"
import logo from "./logo.png"
function Home(){
    return(
        <div className="top">
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
            </div></center>
            </div>
            
            
 )
}
export default Home;


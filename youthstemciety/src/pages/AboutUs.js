import './AboutUs.css';
import { NavLink } from 'react-router-dom';
// 
import elina from '../images/elina.png';
import anita from '../images/anita.jpg';
import vanessa from '../images/vanessa.png';
import logo from '../images/logo.jpg';

import HowToJoinUs from '../components/HowToJoinUs.js';

export default function AboutUs() {

    return(
        <div className="AboutUs">
            <div className="about-us-introduction">
                <h1>ABOUT US</h1>
                <div className="about-us-content">
                    <div className="about-us-information">
                        <p className="about-us-text">
                            ​We are a student-led nonprofit organization dedicated to inspiring and empowering youth. Our mission is to make STEM education accessible and engaging through hands-on activities, interactive workshops, and mentorship opportunities. By creating a supportive community, we aim to spark curiosity, boost confidence, and foster a love for learning in young people, particularly those from underrepresented backgrounds. Together, we’re paving the way for future leaders in innovation and discovery.
                        </p>
                        <div className="about-us-stats">
                            <p className="about-us-stat" id='about-us-followers-stat'>1000+<br/>FOLLOWERS</p>
                            <p className="about-us-stat" id='about-us-accounts-reached-stat'>32 000+<br/>ACCOUNTS REACHED</p>
                        </div>
                    </div>
                    <div className="about-us-img"/>
                </div>
            </div>
            <div className="listed-offered-resources">
                <h1>WHAT WE OFFER:</h1>
                <div className="listed-offered-resources-information">
                    <NavLink className="listed-offered-resource-information" id="mentorship-program-information" to="/programs">
                        <div className="listed-offered-resource-img" id="mentorship-program-img"/>
                        <div className="overlay"/>
                        <h2>Mentorship<br/>Program</h2>
                        <p>This is a description of the mentorship program</p>
                    </NavLink>

                    <NavLink className="listed-offered-resource-information" id="study-resources-information" to="/resources">
                        <div className="listed-offered-resource-img" id="study-resources-img"/>
                        <div className="overlay"/>
                        <h2>Study<br/>Resources</h2>
                        <p>This is a description of the study resources</p>
                    </NavLink>

                    <NavLink className="listed-offered-resource-information" id="student-blogs-information" to="/blogs">
                        <div className="listed-offered-resource-img" id="student-blogs-img"/>
                        <div className="overlay"/>
                        <h2>Student<br/>Blogs</h2>
                        <p>This is a description of the student blogs</p>
                    </NavLink>

                    <NavLink className="listed-offered-resource-information" id="inclusive-community-information" target="_blank">
                        <div className="listed-offered-resource-img" id="inclusive-community-img"/>
                        <div className="overlay"/>
                        <h2>Inclusive<br/>Community</h2>
                        <p>This is a description of the inclusive community</p>
                    </NavLink>
                </div>
            </div>
            <div className="meet-our-founders">
                <div>
                    <h1>MEET OUR FOUNDERS</h1>
                    <div className="meet-our-founders-information">
                        <div className="founder-information" id="meet-elina">
                            <div className="founder-visual">
                                <img className="founder-img" id="meet-elina-img" src={elina}/>
                                <div className="founder-introduction-div">
                                    <p>Elina is gonna say something really cool here and also really motivational and empowering</p>
                                </div>
                            </div>
                            <h2>Elina W.</h2>
                        </div>
                        <div className="founder-information" id="meet-vanessa">
                            <div className="founder-visual">
                                <img className="founder-img" id="meet-vanessa-img" src={vanessa}/>
                                <div className="founder-introduction-div">
                                    <p>Vanessa is gonna say something really cool here and also really motivational and empowering</p>
                                </div>
                            </div> 
                            <h2>Vanessa H.</h2>
                        </div>
                        <div className="founder-information" id="meet-anita">
                            <div className="founder-visual">
                                <img className="founder-img" id="meet-anita-img" src={anita}/>
                                <div className="founder-introduction-div">
                                    <p>Anita is gonna say something really cool here and also really motivational and empowering</p>
                                </div>
                            </div>
                            <h2>Anita I.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-history">
                <h1>OUR HISTORY</h1>
                <div className="our-history-information">
                    <p className="our-history-text">
                        Founded in 2023, Youth STEMciety was born out of a passion for making STEM education accessible to all. Our founders, Elina, Vanessa, and Anita, recognized the need for a supportive community that encourages young people to explore their interests in science, technology, engineering, and mathematics. Since then, we have grown into a vibrant organization that connects students with resources, mentorship, and opportunities to thrive in their STEM journeys.
                    </p>
                    <div className="our-history-img" src={logo} alt="Youth STEMciety Logo"/>
                </div>
            </div>
            <HowToJoinUs />
        </div>
    )
}
import './AboutUs.css';
import { NavLink } from 'react-router-dom';
// 
import elina from '../images/elina.png';
import anita from '../images/anita.png';
import vanessa from '../images/vanessa.png';
import mentor from '../images/mentor-square.png'
import resources from '../images/resources.png'
import blogs from '../images/blogs.png'
import community from '../images/community.jpg'
import context from '../images/about-us-context.png'

import HowToJoinUs from '../components/HowToJoinUs.js';

export default function AboutUs() {

    return(
        <div className="AboutUs">
            <div className="about-us-banner">
                <h1>ABOUT US</h1>
            </div>
            <div className="about-us-introduction">
                <div className="about-us-content">
                    <div className="about-us-information">
                        <div className="about-us-text">
                            <p>
                                We are a student-led, federally registered nonprofit organization committed to inspiring and empowering the next generation of innovators. At Youth STEMciety Association, our mission is to make STEM education not only accessible but also exciting and meaningful for all youth, especially those from underrepresented and underserved communities.
                            </p>
                            <p>
                                We organize interactive workshops, hands-on experiments, speaker events, and mentorship programs that connect students with real-world STEM professionals. Through these experiences, we help students explore their interests, build valuable skills, and develop the confidence to pursue their goals.
                            </p>
                            <p>
                            Our team believes that every young person deserves the opportunity to discover their potential in science, technology, engineering, and math. By fostering a welcoming and inclusive environment, we are building a community where curiosity is celebrated, creativity is encouraged, and learning is a lifelong journey.
                            </p>
                            <p>
                            Together, we’re shaping a future where youth from all backgrounds have the tools, support, and inspiration to become tomorrow’s leaders in STEM.
                            </p>
                        </div>
                        <div className="about-us-stats">
                            <p className="about-us-stat" id='about-us-followers-stat'>1000+<br/>FOLLOWERS</p>
                            <p className="about-us-stat" id='about-us-accounts-reached-stat'>32 000+<br/>ACCOUNTS REACHED</p>
                        </div>
                    </div>
                    <div className="about-us-img">
                        <img src={context} alt="about us banner"/>    
                    </div>
                </div>
            </div>
            <div className="listed-offered-resources">
                <h1>WHAT WE OFFER:</h1>
                <div className="listed-offered-resources-information">
                    <NavLink className="listed-offered-resource-information" id="mentorship-program-information" to="/programs">
                        <img className="listed-offered-resource-img" id="mentorship-program-img" src={mentor} alt="mentor" />
                        <div className="overlay"/>
                        <h2>Mentorship<br/>Program</h2>
                        <p>
                            Our peer mentorship program pairs high school students passionate about STEM with other dedicated students, providing support and encouragement.
                        </p>
                    </NavLink>

                    <NavLink className="listed-offered-resource-information" id="study-resources-information" to="/resources">
                        <img className="listed-offered-resource-img" id="study-resources-img" src={resources} alt="resources" />
                        <div className="overlay"/>
                        <h2>Study<br/>Resources</h2>
                        <p>
                             We provide helpful study guides/notes, practice problems, and curated learning materials to support students both inside and outside the classroom.     
                        </p>
                    </NavLink>

                    <NavLink className="listed-offered-resource-information" id="student-blogs-information" to="/blogs">
                        <img className="listed-offered-resource-img" id="student-blogs-img" src={blogs} alt="blogs" />
                        <div className="overlay"/>
                        <h2>Student<br/>Blogs</h2>
                        <p>
                            Our blog features student-written posts that share personal experiences, STEM insights, project highlights, and advice to inspire and connect with fellow learners.
                        </p>
                    </NavLink>

                    <NavLink className="listed-offered-resource-information" id="inclusive-community-information" to="https://discord.gg/eyZaTv4q" target="_blank">
                        <img className="listed-offered-resource-img" id="inclusive-community-img" src={community} alt="community" />
                        <div className="overlay"/>
                        <h2>Inclusive<br/>Community</h2>
                        <p>
                            Our organization is aimed towards creating an inclusive and welcoming community for all followers and members. Our community welcomes people from all backgrounds and experiences. 
                        </p>
                    </NavLink>
                </div>
            </div>
            <div className="meet-our-founders">
                <div>
                    <h1>MEET OUR FOUNDERS</h1>
                    <div className="meet-our-founders-information">
                        <div className="founder-information" id="meet-anita">
                            <div className="founder-visual">
                                <img className="founder-img" id="meet-anita-img" src={anita} alt="anita" />
                                <div className="founder-introduction-div">
                                    <p>
                                        Hello! I’m Anita, I’m passionate about making STEM accessible and exciting for all youth. I’m especially interested in engineering and physics. Outside of STEM, I play trombone and piano, enjoy reading, and love spending time with friends and family. I’m dedicated to helping young people discover their potential and get inspired to pursue STEM careers.
                                    </p>
                                </div>
                            </div>
                            <h2>Anita I.</h2>
                        </div>
                        <div className="founder-information" id="meet-elina">
                            <div className="founder-visual">
                                <img className="founder-img" id="meet-elina-img" src={elina} alt="elina" />
                                <div className="founder-introduction-div">
                                    <p>
                                        Hi! My name is Elina. Whether I'm building with LEGO, diving into true crime cases, starting STEM projects, or piecing together jigsaw puzzles, I believe learning should always be exciting. I love to collaborate with my peers to help youth discover what inspires them.
                                    </p>
                                </div>
                            </div>
                            <h2>Elina W.</h2>
                        </div>
                        <div className="founder-information" id="meet-vanessa">
                            <div className="founder-visual">
                                <img className="founder-img" id="meet-vanessa-img" src={vanessa} alt="vanessa" />
                                <div className="founder-introduction-div">
                                    <p>
                                        Hey! I’m Vanessa, a huge matcha and biology enthusiast. In my free time, I like to read (mostly thriller and rom-coms) and play with my cat, Seven. Through YSA, I hope to inspire more youth to pursue STEM, with a wide range of opportunities and events!
                                    </p>
                                </div>
                            </div> 
                            <h2>Vanessa H.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <HowToJoinUs />
        </div>
    )
}
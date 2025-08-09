import '../App.css';

import elina from '../images/elina.png';
import anita from '../images/anita.jpg';
import vanessa from '../images/vanessa.png';
import logo from '../images/logo.png';

import {useState} from 'react';
import HowToJoinUs from '../components/HowToJoinUs.js';



export default function Homepage() {
  const [offeredResourceNumber, setOfferedResourceNumber] = useState(0)

  const offeredResourcesArray = [
    ["Mentorship Program", "Our peer mentorship program pairs high school students passionate about STEM with other dedicated students, providing support and encouragement."],
    ["Study Resources", "We provide helpful study guides/notes, practice problems, and curated learning materials to support students both inside and outside the classroom."],
    ["Student Blogs", "Our blog features student-written posts that share personal experiences, STEM insights, project highlights, and advice to inspire and connect with fellow learners."],
    ["Inclusive Community", "Our organization is aimed towards creating an inclusive and welcoming community for all followers and members. Our community welcomes people from all backgrounds and experiences."],
  ]

  

  return (
    <>
      <div className="homepage">
        <div className="homepage-banner">
          Youth STEMciety
        </div>
        <div className="homepage-content">
          <div className="founder-letter-div"> {/*styling needed*/}
              <div className="founder-letter">
                <h2>Letter From Our Founders</h2>
                <div className="founder-letter-text">
                  <p>
                  We are your founders, Anita, Elina, and Vanessa. We love empowering YOU(th)! We started with a simple idea: to make STEM education more accessible. As students ourselves, we saw many of our peers struggle to enjoy STEM because they faced constant barriers and were expected to learn from an uninspiring curriculum.
                  </p>
                  <p>
                    When we looked around our own communities, we noticed that so many young children, our siblings, cousins, and friends, felt disconnected from STEM. At first, we didn’t understand why. Then it became clear: we had been exposed to STEM topics early on, which helped us grow our curiosity into something more, even a future career.                    
                  </p>
                  <p>
                  That’s why we created YouthSTEMciety, to break down those barriers and give every young person a chance to explore, create, and thrive in STEM.                    
                  </p>
                  <p>
                    With excitement and gratitude,
                    <br/>
                    Anita, Elina, and Vanessa
                  </p>
                </div>
              </div>
              <div className ="founder-letter-image-collection">
                <img src={anita} className="founder-letter-image" id="anita-image" alt="anita" />
                <img src={elina} className="founder-letter-image" id="elina-image" alt="elina" />
                <img src={vanessa} className="founder-letter-image" id="vanessa-image" alt="vanessa" />
              </div>
          </div>

          <div className="horizontal-scroll-offered-resources"> {/*styling needed*/}
            <div className="offered-resources-left-button">
              <button>
                LEFT
              </button>
            </div>

            <div className="offered-resources-information">
              <h1>WHAT WE OFFER:</h1>
              <h2>{offeredResourcesArray[offeredResourceNumber][0]}</h2>
              <p>{offeredResourcesArray[offeredResourceNumber][1]}</p>
            </div>

            <div className="offered-resources-right-button">
              <button>
                RIGHT
              </button>
            </div>

          </div>
          <HowToJoinUs />
          <div className="instagram-display">{/*let's do this last*/}
            <div className="instagram-display-heading">
              <h1>OUR INSTAGRAM!</h1>
              <p>🌟 FOLLOW US <a href="https://www.instagram.com/youthstemciety/" target="blank">@youthstemciety</a></p>
            </div>
            <div className="instagram-profile-banner">
              <img src={logo} className="instagram-profile" alt="logo"/>
              <div className="instagram-profile-information">
                <h2>youthstemciety</h2>
                <p>Empower. Innovate. Succeed</p>
              </div>
            </div>
            <div className="instagram-posts">
              <div className="instagram-post">Post 1</div>
              <div className="instagram-post">Post 2</div>
              <div className="instagram-post">Post 3</div>
              <div className="instagram-post">Post 4</div>
            </div>
            <p>Follow us on Instagram</p>
          </div>
          <div className="faq">
            <h1>FAQs</h1>
            <div className="faq-content">
              <div className="faq-questions">
                <div className="faq-question-content">
                  <div className="faq-question-text">
                    <h2 className="faq-question">
                      What type of STEM programs or events do you organize?
                    </h2>
                    <p className="faq-answer">
                      We plan both in person and online events! We have events that last over a week, such as virtual internship programs, as well as workshops and activities that last about a day. These help foster a community of STEM enthusiasts from all ages and places!
                    </p>
                  </div>
                  <div className="faq-question-text">
                    <h2 className="faq-question">
                      Who are your programs for (age group, region, demographics)?
                    </h2>
                    <p className="faq-answer">
                      Our organization is mostly geared towards youth, but we do welcome everyone from every age! Our programs welcome everyone from all over the globe as well.
                    </p>
                  </div>
                  <div className="faq-question-text">
                    <h2 className="faq-question">
                      How can students get involved or join your organization?
                    </h2>
                    <p className="faq-answer">
                       Students can apply to be an executive for YSA every 4-5 months when we open hiring, or they can join as a general member. These members would assist with events and help create a welcoming community within our organization!
                    </p>
                  </div> 
                </div>
              </div>
              <div className="faq-ask-question">
                <h2>Have another question? Let us know!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

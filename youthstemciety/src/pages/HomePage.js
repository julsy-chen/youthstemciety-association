import '../App.css';

import elina from '../images/elina.png';
import anita from '../images/anita.jpg';
import vanessa from '../images/vanessa.png';
import logo from '../images/logo.png';

import {useState} from 'react';
import HowToJoinUs from '../components/HowToJoinUs.js';



export default function Homepage() {
  const [offeredResourceNumber, setOfferedResourceNumber] = useState(1)

  const offeredResourcesArray = [
    ["Student Blogs", "this is a description of the student blogs"],
    ["Mentorship Program", "this is a description of the mentorship program"],
    ["Study Resources", "this is a description of the study resources"],
    ["Inclusive Community", "this is a description of the inclusive community"],
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
                <p className="founder-letter-text">​We are a student-led nonprofit organization dedicated to inspiring and empowering youth. Our mission is to make STEM education accessible and engaging through hands-on activities, interactive workshops, and mentorship opportunities. By creating a supportive community, we aim to spark curiosity, boost confidence, and foster a love for learning in young people, particularly those from underrepresented backgrounds. Together, we’re paving the way for future leaders in innovation and discovery.</p>
              </div>
              <div className ="founder-letter-image-collection">
                <img src={elina} className="founder-letter-image" id="elina-image" alt="elina" />
                <img src={vanessa} className="founder-letter-image" id="vanessa-image" alt="vanessa" />
                <img src={anita} className="founder-letter-image" id="anita-image" alt="anita" />
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
              <p>🌟 FOLLOW US @youthstemciety</p>
            </div>
            <div className="instagram-profile-banner">
              <img src={logo} className="instagram-profile" alt="logo"/>
              <div className="instagram-profile-information">
                <h1>youthstemciety</h1>
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
            <div className="faq-information">
              <div className="faq-questions">
                <p>insert question</p>
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

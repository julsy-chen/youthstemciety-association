import elina from '../images/elina.png';
import anita from '../images/anita.jpg';
import vanessa from '../images/vanessa.jpg';
import logo from '../images/logo.png';

import {useState} from 'react';

import '../App.css';

export default function Homepage() {
  const [offeredResourceNumber, setOfferedResourceNumber] = useState(1)

  const offeredResourcesArray = [
    ["Student Blogs", "this is a description of the student blogs"],
    ["Mentorship Program", "this is a description of the mentorship program"],
    ["Study Resources", "this is a description of the study resources"],
    ["Inclusive Community", "this is a description of the inclusive community"],
  ]

  

  return (
    <div className="Homepage">
      <div className="founder-letter-div"> {/*styling needed*/}
          <div className="founder-letter">
            <h2>Letter From Our Founders</h2>
            <h3>Insert: mission of npo, why & how npo was started, what npo has achieved, what npo HOPES to achieve</h3>
          </div>
          <div className ="founder-letter-images">
            <img src={elina} className="founder-letter-image" alt="elina" />
            <img src={vanessa} className="founder-letter-image" alt="vanessa" />
            <img src={anita} className="founder-letter-image" alt="anita" />
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

      <div className="how-to-be-involved-div">{/*styling needed*/}
        <div className="how-to-be-involved-heading"> 
          <h1>INTERESTED IN JOINING US?</h1>
          <p>Join our Discord & follow us on Instagram!</p>
        </div>

        <div className="volunteer-opportunities">
          <div className="volunteer-information">
            <h2>Volunteer Opportunities</h2>
            <p>We are always looking for volunteers to help us with our mission!</p>
          </div>
          <div className="volunteer-opportunities-image-carousel">
            <div>this is gonna be where the image carousel is</div> 
          </div>

        </div>
        <div className="hiring-opporuntiies">
          <div className="hiring-information">
            <h2>When We're Hiring</h2>
            <p>please join us</p>
          </div>
          <div className="hiring-post">
            this is where the hiring post wil be or any other image
          </div>
        </div>
      </div>
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
  );
}

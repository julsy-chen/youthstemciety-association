import '../App.css';

import elina from '../images/elina.png';
import anita from '../images/anita.png';
import vanessa from '../images/vanessa.png';
import logo from '../images/logo.png';
import right from '../images/right-arrow.svg';
import left from '../images/left-arrow.svg';
import blogs from '../images/what-we-offer-blogs.png'
import community from '../images/what-we-offer-community.png'
import mentorship from '../images/what-we-offer-mentorship.png'
import resources from '../images/what-we-offer-resources.png'
import post_1 from '../images/post-1.png'
import post_2 from '../images/post-2.png'
import post_3 from '../images/post-3.png'
import post_4 from '../images/post-4.png'
import expand from '../images/expand-icon.svg'
import collapse from '../images/collapse-icon.svg'
import ig_post_icon from "../images/ig-post-icon.png";
import streaks from "../images/streaks.png";

import {useState} from 'react';
import HowToJoinUs from '../components/HowToJoinUs.js';

export default function Homepage() {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzLw13c_5OayqmwUCqjjDKuGWxpqkJcjCSw3qiArNoGpFpCSlzJaOmghIMKoZ6A04KC/exec";

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Question: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const data = new FormData();
    // Map state to the field names expected by your Google Sheet
    data.append('Name', `${formData.FirstName} ${formData.LastName}`);
    data.append('Email', formData.Email);
    data.append('Message', formData.Question); // Assuming your sheet has a 'Message' column

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        body: data,
      });

      setStatus('Success! Your message has been sent.');
      // Clear the form fields after submission
      setFormData({
        FirstName: '',
        LastName: '',
        Email: '',
        Question: ''
      });
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('Error submitting form.');
    }
  };

  
  const [offeredResourceNumber, setOfferedResourceNumber] = useState(0)
  const [openAnswer, setOpenAnswer] = useState([false, false, false, false])

  const offeredResourcesArray = [
    ["Mentorship Program", "Our peer mentorship program pairs high school students passionate about STEM with other dedicated students, providing support and encouragement."],
    ["Study Resources", "We provide helpful study guides/notes, practice problems, and curated learning materials to support students both inside and outside the classroom."],
    ["Student Blogs", "Our blog features student-written posts that share personal experiences, STEM insights, project highlights, and advice to inspire and connect with fellow learners."],
    ["Inclusive Community", "Our organization is aimed towards creating an inclusive and welcoming community for all followers and members. Our community welcomes people from all backgrounds and experiences."],
  ]

  const offeredResourcesBannerImage = [mentorship, resources, blogs, community]

  const handleClickArrow = (direction) => {
    setOfferedResourceNumber(prevNumber => {
        let newNumber = prevNumber + direction;
        if (newNumber < 0) {
            newNumber = offeredResourcesArray.length - 1;
        } else if (newNumber >= offeredResourcesArray.length) {
            newNumber = 0;
        }
        return newNumber;
    });
  }; 

  const handleClickFAQ = (questionNumber) => {
    setOpenAnswer(currentOpenAnswer => {
      const newOpenAnswer = [...currentOpenAnswer];
      newOpenAnswer[questionNumber] = !newOpenAnswer[questionNumber];
      return newOpenAnswer;
    });
  }

  return (
    <>
      <div className="homepage">
        <div className="homepage-banner">
          <img className="backdrop" src={streaks} alt="" />
          <div className="banner-text">
            <h1>YOUTH STEMCIETY</h1>
            <h2>Empower. Innovate. Succeed.</h2>
          </div>
          
        </div>
        <div className="homepage-content">
          <div className="founder-letter-div"> {/*styling needed*/}
              <div className="founder-letter">
                <h1>Letter From Our Founders</h1>
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

          <div className="horizontal-scroll-offered-resources">
            <div className="slider-container">
              <img className="offered-resources-information-image" src={offeredResourcesBannerImage[offeredResourceNumber]}/>
              <div className="offered-resources" >
                <div className="offered-resources-information">
                  <div className="offered-resources-information-text">
                    <h2>WHAT WE OFFER</h2>
                    <hr className="solid"/>
                    <h1>{offeredResourcesArray[offeredResourceNumber][0]}</h1>
                    <p>{offeredResourcesArray[offeredResourceNumber][1]}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="buttonArea">
              <img className="offered-resources-button left-button" src={left} onClick={() => handleClickArrow(-1)} alt="Previous" />
              <div className="overlay left"/>
            </div>
            <div className="buttonArea">
              <img className="offered-resources-button right-button" src={right} onClick={() => handleClickArrow(1)} alt="Next" />
              <div className="overlay right"/>
            </div>
          </div>

          {/* <div className="horizontal-scroll-offered-resources">
            <img
              className="offered-resources-information-image"
              src={offeredResourcesBannerImage[offeredResourceNumber]}
              alt=""
            />
            <div className="buttonArea">
              <img
                className="offered-resources-button left-button"
                src={left}
                onClick={() => handleClickArrow(-1)}
                alt="Previous"
              />
              <div className="overlay left" />
            </div>
            <div className="offered-resources-slider-container">
              <div
                className="offered-resources-slider-wrapper"
                style={{ transform: `translateX(-${offeredResourceNumber * 100}%)` }}
              >
                {offeredResourcesArray.map((resource, index) => (
                  <div className="offered-resource-slide" key={index}>
                    <div className="offered-resources-information">
                      <div className="offered-resources-information-text">
                        <h2>WHAT WE OFFER</h2>
                        <hr className="solid" />
                        <h1>{resource[0]}</h1>
                        <p>{resource[1]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> 
            <div className="buttonArea">
              <img
                className="offered-resources-button right-button"
                src={right}
                onClick={() => handleClickArrow(1)}
                alt="Next"
              />
              <div className="overlay right" />
            </div>
          </div>*/}

        
          <HowToJoinUs />
          
          <div className="instagram-display">{/*let's do this last*/}
            <div className="instagram-display-heading">
              <h1>OUR INSTAGRAM</h1>
              <p>Follow us <a href="https://www.instagram.com/youthstemciety/" target="_blank" rel="noreferrer">@youthstemciety</a></p>
            </div>
            <div className="instagram-content" >
              <div className="instagram-profile-banner">
                <div className="instagram-profile">
                  <img src={logo} alt="logo"/>
                </div>
                <div className="instagram-profile-information">
                  <h3>youthstemciety</h3>
                  <p>Empower. Innovate. Succeed.</p>
                </div>
              </div>
              <div className="instagram-posts">
                <a href="https://www.instagram.com/p/DFLaglmRnRe/?img_index=1" target="_blank" rel="noreferrer" className="instagram-post">
                  <img className="post-image" src={post_1} alt="" />
                  <img className="ig-display-post-icon" src={ig_post_icon} alt="" />
                </a>
                <a href="https://www.instagram.com/p/DMOXmBPyXz5/?img_index=1" target="_blank" rel="noreferrer" className="instagram-post">
                  <img className="post-image" src={post_2} alt="" />
                  <img className="ig-display-post-icon" src={ig_post_icon} alt="" />
                </a>
                <a href="https://www.instagram.com/p/DAO0T48Ra57/?img_index=1" target="_blank" rel="noreferrer" className="instagram-post">
                  <img className="post-image" src={post_3} alt="" />
                  <img className="ig-display-post-icon" src={ig_post_icon} alt="" />
                </a>
                <a href="https://www.instagram.com/p/DI1_q10RswP/?img_index=1" target="_blank" rel="noreferrer" className="instagram-post">
                  <img className="post-image" src={post_4} alt="" />
                  <img className="ig-display-post-icon" src={ig_post_icon} alt="" />
                </a>
              </div>
            </div>
          </div>
            
          <div className="faq">
            <h1>FAQs</h1>
            <div className="faq-content">
              <div className="faq-questions">
                <div className="faq-question-content">
                  <img 
                    className="faq-question-icon" 
                    src={(openAnswer[0] ? collapse : expand)}
                    onClick={() => handleClickFAQ(0)}
                  />
                  <div className="faq-question-text">
                    <h2 className="faq-question" onClick={() => handleClickFAQ(0)}>
                      What type of STEM programs or events do you organize?
                    </h2>
                    <p className={"faq-answer " + (openAnswer[0] ? "open-answer" : "closed-answer")}>
                      We plan both in person and online events! We have events that last over a week, such as virtual internship programs, as well as workshops and activities that last about a day. These help foster a community of STEM enthusiasts from all ages and places!
                    </p>
                  </div>
                </div>
                <div className="faq-question-content">
                  <img 
                    className="faq-question-icon" 
                    src={(openAnswer[1] ? collapse : expand)}
                    onClick={() => handleClickFAQ(1)}
                  />
                  <div className="faq-question-text">
                    <h2 className="faq-question" onClick={() => handleClickFAQ(1)}>
                      Who are your programs for (age group, region, demographics)?
                    </h2>
                    <p className={"faq-answer " + (openAnswer[1] ? "open-answer" : "closed-answer")}>
                      Our organization is mostly geared towards youth, but we do welcome everyone from every age! Our programs welcome everyone from all over the globe as well.
                    </p>
                  </div>
                </div>
                <div className="faq-question-content">
                  <img 
                    className="faq-question-icon" 
                    src={(openAnswer[2] ? collapse : expand)}
                    onClick={() => handleClickFAQ(2)}
                  />
                  <div className="faq-question-text">
                    <h2 className="faq-question" onClick={() => handleClickFAQ(2)}>
                      How can students get involved or join your organization?
                    </h2>
                    <p className={"faq-answer " + (openAnswer[2] ? "open-answer" : "closed-answer")}>
                       Students can apply to be an executive for YSA every 4-5 months when we open hiring, or they can join as a general member. These members would assist with events and help create a welcoming community within our organization!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="form-container">
                <form className="faq-ask-question" onSubmit={handleSubmit}>
                  
                  <h2>Have another question? Let us know!</h2>
                  <div className="input-fields">
                    <div className="full-name">
                      <div className="first-name">
                        <p>First Name</p>
                        <input
                          name="FirstName"
                          className="first-name"
                          value={formData.FirstName} // Connect value
                          onChange={handleChange}
                          placeholder="Jane"
                          required // Good practice to add required
                        />
                      </div>
                      <div className="last-name">
                        <p>Last Name</p>
                        <input
                          name="LastName"
                          value={formData.LastName} // Connect value
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="email">
                      <p>Email</p>
                      <input
                        type="email" // Use type="email" for validation
                        name="Email"
                        className="email"
                        value={formData.Email}
                        onChange={handleChange}
                        placeholder="legitemail@gmail.com"
                        required
                      />
                    </div>
                    <div className="question">
                      <p>Question</p>
                      <input // Use a textarea for multi-line questions
                        name="Question"
                        className="question"
                        value={formData.Question}
                        onChange={handleChange}
                        placeholder="e.g. How do I join Youth STEMciety Association?"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit"> Submit </button>
                  {/* FIX 3: Display status message */}
                  {status && <p className="submit-status">{status}</p>}`

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

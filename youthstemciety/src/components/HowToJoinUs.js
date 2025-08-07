import { useState } from 'react';

import vanessa from "../images/vanessa.png";
import elina from "../images/elina.png";
import anita from "../images/anita.jpg";

export default function HowToJoinUs() {
    const [imageInFocus, setImageInFocus] = useState(vanessa) 

    const volunteerImages = [vanessa, elina, anita]

    const handleClick = (id) => {
        setImageInFocus(volunteerImages[id])
    }

    return (
        <div className="how-to-be-involved-div">{/*styling needed*/}
            <div className="how-to-be-involved-heading"> 
                <h1>INTERESTED IN JOINING US?</h1>
                <p>Join our Discord & follow us on Instagram!</p>
            </div>
    
            <div className="volunteer-opportunities">
                <div className="volunteer-information">
                    <h2>Volunteer Opportunities</h2>
                    <p>
                        Join our team of dedicated volunteers and help empower the next generation of innovators! Whether you're a student, professional, or simply someone who believes in accessible education, we have meaningful opportunities for you. Volunteering with us is a great way to build your skills, expand your network, and support a cause that matters.
                    </p>
                </div>
                <div className="volunteer-opportunities-image-carousel"> {/* looks pretty silly when it's squished */}
                    <img src={imageInFocus} className="image-in-focus"/> 
                    <div className="smaller-images">
                        <div className="smaller-image" id="0" onClick={() => handleClick(0)}> {/* add handleClick event */}
                            <img className="smaller-image" src={vanessa}/>
                            <div className="overlay"/>
                        </div>
                        <div className="smaller-image" id="1" onClick={() => handleClick(1)}>
                            <img className="smaller-image" src={elina}/>
                            <div className="overlay"/>
                        </div>
                        <div className="smaller-image" id="2" onClick={() => handleClick(2)}>
                            <img className="smaller-image" src={anita}/>
                            <div className="overlay"/>
                        </div>
                    </div>
                </div>
    
            </div>
            <div className="hiring-opporuntiies">
                <div className="hiring-information">
                    <h2>When We're Hiring</h2>
                    <div>
                        <p>
                            Join our team! We open applications every few months for a range of roles in departments like research, outreach, operations, and more.
                        </p>
                        <p>
                        Whether you're looking to lead initiatives, support our programs, or contribute behind the scenes, there's a spot for you. As part of our team, you'll collaborate with passionate youth, build real-world skills, and help make STEM education more accessible all while fulfilling your volunteer hour requirements.
                        </p>
                        <p>
                        Follow us on Instagram or check our website regularly to see when applications open!
                        </p>
                    </div>
                    
                </div>
                <div className="hiring-post">
                    this is where the hiring post wil be or any other image
                </div>
            </div>
        </div>
    )
}
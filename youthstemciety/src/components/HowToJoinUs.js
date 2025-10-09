import { useState } from 'react';

import volunteer_1 from "../images/volunteer_1.png";
import volunteer_2 from "../images/volunteer_2.png";
import volunteer_3 from "../images/volunteer_3.png";
import hiring from "../images/hiring.png";
import ig_post_icon from "../images/ig-post-icon.png";

export default function HowToJoinUs() {
    const volunteerImages = [volunteer_1, volunteer_2, volunteer_3]
    const imageCaptions = [
        "Contribute to a welcoming community of learners as mentors!",
        "Speak at volunteer conventions, events and network with other organizations!",
        "Assist in leading workshops and hands-on events for youth!"
    ]

    const [focusIndex, setFocusIndex] = useState(0)

    const handleClick = (id) => {
        setFocusIndex(id)
    }

    return (
        <div className="how-to-be-involved-div">{/*styling needed*/}
            <div className="how-to-be-involved-heading"> 
                <h1>Interested In Joining Us?</h1>
                <p>Join our <a id="discord-link" href="https://discord.gg/78bVwk5d">Discord</a> & follow us on <a id="instagram-link" href="https://www.instagram.com/youthstemciety/">Instagram</a>!</p>
            </div>
    
            <div className="volunteer-opportunities">
                <div className="volunteer-information">
                    <h2>Volunteer Opportunities</h2>
                    <p>
                        Join our team of dedicated volunteers and help empower the next generation of innovators! Whether you're a student, professional, or simply someone who believes in accessible education, we have meaningful opportunities for you. Volunteering with us is a great way to build your skills, expand your network, and support a cause that matters.
                    </p>
                </div>
                <div className="volunteer-opportunities-image-carousel">
                    <div className="image-in-focus-container">
                        <img src={volunteerImages[focusIndex]} className="image-in-focus" alt=""/>
                        <p className="caption">{imageCaptions[focusIndex]}</p>
                    </div>
                    <div className="smaller-images">
                        {volunteerImages.map((imageSrc, index) => (
                            <div
                            key={index}
                            className="smaller-image"
                            onClick={() => handleClick(index)}
                            >
                            <img src={imageSrc} alt={`Volunteer opportunity ${index + 1}`} />
                            
                            {/* This div provides the dark overlay on hover */}
                            <div className="overlay"/>
                            {index === focusIndex && <div className="active-thumbnail" />}
                            </div>
                        ))}
                    </div>
                </div>
    
            </div>
            <div className="hiring-opportunities">
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
                    <img className="ig-post-icon" src={ig_post_icon} alt="" />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScaVDgxW7_r0miYyXZ-zW073o3QQZhtgARHVYuRBc4ECdrydQ/viewform" target="_blank" rel="noreferrer"><img className="hiring-post-image" src={hiring} alt="hiring-post-image" /></a> 
                </div>
                
            </div>
        </div>
    )
}
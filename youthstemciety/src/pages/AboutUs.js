import './AboutUs.css';

export default function AboutUs() {

    return(
        <div className="AboutUs">
            <div className="about-us-introduction">
                <h1>ABOUT US</h1>
            </div>
            <div className="listed-offered-resources">
                <h1>WHAT WE OFFER:</h1>
                <div className="listed-offered-resources-information">
                    <div className="listed-offered-resources-img" id="mentorship-program-information">
                        <div className="mentorship-program-img"/>
                        <h2>Mentorship Program</h2>
                        <p>This is a description of the mentorship program.</p>
                    </div>
                    <div className="listed-offered-resources-img" id="study-resources-information">
                        <div className="mentorship-program-img"/>
                        <h2>Study Resources</h2>
                        <p>This is a description of the study resources.</p>
                    </div>
                    <div id="student-blog-information">
                        <div className="listed-offered-resources-img" id="mentorship-program-img"/>
                        <h2>Student Blogs</h2>
                        <p>This is a description of the student blogs.</p>
                    </div>
                    <div id="inclusive-community-information">
                        <div className="listed-offered-resources-img" id="mentorship-program-img"/>
                        <h2>Inclusive Community</h2>
                        <p>This is a description of the inclusive community.</p>
                    </div>
                </div>
            </div>
            <div className="meet-our-founders">

            </div>
            <div className="our-history">
            </div>
            <div className="how-to-be-involved-div">

            </div>
        </div>
    )
}
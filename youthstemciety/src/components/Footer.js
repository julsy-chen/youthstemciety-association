import { NavLink } from "react-router-dom";

import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import discord from '../images/discord.png'

export default function Footer() {

    return(
        <div className="footer-content">
            <div className="socials">
                <h3>SOCIALS</h3>
                <div className="social-icons">
                    <img className="social-icon" src={instagram}></img>
                    <img className="social-icon" src={linkedin}></img>
                    <img className="social-icon" src={discord}></img>
                </div>
            </div>
            <div className="contacts">
                <h3>CONTACT US</h3>
                <p>
                    Email us at <span>youthstemsociety@gmail.com</span>
                </p>
            </div>
            <div className="info">
                <h3>INFO</h3>
                <NavLink 
                    to="/privacy-policy"
                    className={({ isActive }) => {
                        return(
                            "navigation-links " + 
                            (isActive
                                ? "active-page"
                                : "inactive-page"
                            )
                        )
                    }}
                    id="navigation-link-privacy-policy"
                >Privacy Policy</NavLink>
            </div>
        </div>
    )
}
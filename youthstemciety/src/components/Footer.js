import { NavLink } from "react-router-dom";

import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import discord from '../images/discord.png'
import copy from '../images/copy.png'

export default function Footer() {
    const copyEmail = async () => {
      try {
        await navigator.clipboard.writeText("youthstemsociety@gmail.com");
        alert('Text copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

    return(
        <div className="footer-content">
            <div className="socials">
                <h3>Socials</h3>
                <div className="social-icons">
                    <a href="https://www.instagram.com/youthstemciety/" target="_blank" rel="noreferrer"><img className="social-icon" src={instagram}></img></a>
                    <a href="https://www.linkedin.com/company/youth-stemciety-association/" target="_blank" rel="noreferrer"><img className="social-icon" src={linkedin}></img></a>
                    <a href="https://discord.gg/eyZaTv4q" target="_blank" rel="noreferrer"><img className="social-icon" src={discord}></img></a>
                </div>
            </div>
            <div className="contacts">
                <h3>Contact Us</h3>
                <div className="email-container">
                    <p>
                        Email us at <b>youthstemsociety@gmail.com</b>                   
                    </p>
                    <img src={copy} onClick={copyEmail}/>
                </div>
            </div>
            <div className="info">
                <h3>Info</h3>
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
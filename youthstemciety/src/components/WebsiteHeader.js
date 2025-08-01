import { Link } from "react-router-dom";
import logo from '../images/logo.jpg';

export default function WebsiteHeader() {

    return (
        <header className="website-header">
            <Link to="/">
                <img src={logo} className="website-header-logo" alt="logo" />
            </Link>
            
            <nav className="website-navigation">
                <Link 
                    to="/about-us" 
                    className="navigation-links"
                >ABOUT US</Link>

                <Link 
                    to="/programs"
                    className="navigation-links"
                >PROGRAMS</Link>

                <Link 
                    to="/resources"
                    className="navigation-links"
                >RESOURCES</Link>

                <Link 
                    to="/blog"
                    className="navigation-links" 
                    id="navigation-link-blog"
                >BLOG</Link>
            </nav>
        </header>
    );
};
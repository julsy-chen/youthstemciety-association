import { NavLink } from "react-router-dom";
import { useState } from 'react';

import logo from '../images/logo.jpg';

export default function WebsiteHeader() {
    const [isAboutActive, setIsAboutActive] = useState(false)
    const [isProgramsActive, setIsProgramsActive] = useState(false) 
    const [isResourcesActive, setIsResourcesActive] = useState(false)
    const [isBlogActive, setIsBlogActive] = useState(false)

    return (
        <header className="website-header">
            <NavLink to="/">
                <img src={logo} className="website-header-logo" alt="logo" />
            </NavLink>
            
            <nav className="website-navigation">
                <NavLink 
                    to="/about-us" 
                    className={({ isActive }) => {
                        return(
                            "navigation-links " + 
                            (isActive
                                ? "active-page"
                                : "inactive-page"
                            )
                        )
                    }}
                >ABOUT US</NavLink>

                <NavLink 
                    to="/programs"
                    className={({ isActive }) => {
                        return(
                            "navigation-links " + 
                            (isActive
                                ? "active-page"
                                : "inactive-page"
                            )
                        )
                    }}
                >PROGRAMS</NavLink>

                <NavLink 
                    to="/resources"
                    className={({ isActive }) => {
                        return(
                            "navigation-links " + 
                            (isActive
                                ? "active-page"
                                : "inactive-page"
                            )
                        )
                    }}
                >RESOURCES</NavLink>

                <NavLink 
                    to="/blogs"
                    className={({ isActive }) => {
                        return(
                            "navigation-links " + 
                            (isActive
                                ? "active-page"
                                : "inactive-page"
                            )
                        )
                    }}
                    id="navigation-link-blog"
                >BLOG</NavLink>
            </nav>
        </header>
    );
};
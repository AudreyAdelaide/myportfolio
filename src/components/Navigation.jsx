import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoHome, GoPerson, GoGear, GoBriefcase, GoMail, GoThreeBars } from "react-icons/go";

function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(false);
    }

    return (
        <div className="navigation">
            <div className="navigation__hamburger" onClick={(e) => setIsOpen(!isOpen)}><GoThreeBars /></div>
            <nav className={isOpen ? "navigation__open" : "navigation__close"}>
                <ul className="navigation__links">
                    <li className="navigation__links--item">
                        <NavLink to="/" aria-label="home" activeclassname="active" onClick={handleClick}>
                            <GoHome /> Home
                        </NavLink>
                    </li>
                    <li className="navigation__links--item">
                        <NavLink to="/about" aria-label="about" activeclassname="active" onClick={handleClick}>
                            <GoPerson /> About
                        </NavLink>
                    </li>
                    <li className="navigation__links--item">
                        <NavLink to="/skills" aria-label="skills" activeclassname="active" onClick={handleClick}>
                            <GoGear /> Skills
                        </NavLink>
                    </li>
                    <li className="navigation__links--item">
                        <NavLink to="/portfolio" aria-label="portfolio" activeclassname="active" onClick={handleClick}>
                            <GoBriefcase /> Works
                        </NavLink>
                    </li>
                    <li className="navigation__links--item">
                        <NavLink to="/contact" aria-label="contact" activeclassname="active" onClick={handleClick}>
                            <GoMail /> Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;

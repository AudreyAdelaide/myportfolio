import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills">Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Works</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;

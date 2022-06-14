import React, { useState } from "react";
import logo from "../images/AAlogo.svg";

import Navigation from "./Navigation";

import { GoOctoface } from "react-icons/go";
import { TiSocialLinkedin } from "react-icons/ti";

function Header() {
    return (
        <div className="aside">
            <header className="header">
                <div className="header__branding">
                    <img src={logo} className="header__logo" alt="logo Audrey Adélaïde" />
                    <p className="header__name">Audrey Adélaïde</p>
                    <h1 className="header__title">Web developer</h1>
                </div>
                <div className="header__social">
                    <ul className="header__social--flex">
                        <li className="header__social--link">
                            <a
                                href="https://github.com/AudreyAdelaide"
                                target="_blank"
                                className="social-icon"
                                aria-label="Lien vers GitHub"
                            >
                                <GoOctoface />
                            </a>
                        </li>
                        <li className="header__social--link">
                            <a
                                href="https://www.linkedin.com/in/audreyadelaide/"
                                target="_blank"
                                className="social-icon"
                                aria-label="lien vers LinkedIn"
                            >
                                <TiSocialLinkedin />
                            </a>
                        </li>
                        {/* <li className="header__social--link"><a href="" target="_blank">CodePen</a></li>
                    <li className="header__social--link"><a href="" target="_blank">Twitter</a></li> */}
                    </ul>
                </div>
                <Navigation />
            </header>
        </div>
    );
}

export default Header;

import React from "react";
import logo from "../images/AAlogo.svg";

function Footer() {
    return <div>
        <footer className="footer">
            {/* <div className="footer__container">
                <div className="footer__content"> */}
                    <img className="footer__logo" src ={ logo } alt="logo Audrey Adélaïde" />
                    <p>&copy; Copyright 2022 - By AudreyDev with 💜</p>
                {/* </div>
            </div> */}
        </footer>
    </div>;
}

export default Footer;

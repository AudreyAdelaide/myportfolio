import React, { useState } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

function Header() {
    const [section_isOpen, setSection_isOpen] = useState(null);

    // props.activeSection(section_isOpen);

    // const pull_section = (activeSection) => {
    //     setSection_isOpen(activeSection);
    //     console.log(activeSection);
    // };

    return (
        <div className="aside">
            <header className="header">
                <div className="header__title">
                    <h1>Header</h1>
                </div>
                <Navigation />
            </header>
            <Footer />
        </div>
    );
}

export default Header;

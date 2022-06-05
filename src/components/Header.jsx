import React from "react";

import Navigation from "./Navigation";

function Header() {
    return (
        <header>
            <div className="header__title">
                <h1>Header</h1>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;

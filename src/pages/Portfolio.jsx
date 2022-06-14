import React, { useState, useEffect } from "react";

function Portfolio() {
    const [active, setActive] = useState(false);
    const sectionName = "/portfolio";
    const section = window.location.pathname;

    useEffect(() => {
        if (section === sectionName) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, []);
    return (
        <div id="portfolio" className={active ? "section portfolio active_section" : "section portfolio"}>
            <h1>Works</h1>
            <p>
                PORTFOLIO - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae
                eleifend tristique, lorem magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac
                cursus facilisis. Aenean vel porta turpis, ut iaculis justo.
            </p>
        </div>
    );
}

export default Portfolio;

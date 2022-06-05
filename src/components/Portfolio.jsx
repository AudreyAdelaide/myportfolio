import React from "react";

function Portfolio() {
    window.onhashchange = (e) => console.log(window.location.hash);
    return (
        <section id="portfolio" className="section portfolio">
            <h1>Works</h1>
        </section>
    );
}

export default Portfolio;

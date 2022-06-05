import React, { useState, useEffect } from "react";

function About() {
    const [active, setActive] = useState(false);
    const sectionName = "/about";
    const section = window.location.pathname;

    useEffect(() => {
        if (section === sectionName) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, []);

    // console.log(active);

    return (
        <section id="about" className={active ? "section about active" : "section about"}>
            <h1>About</h1>
        </section>
    );
}

export default About;

import React, { useState, useEffect } from "react";
import ProjectsCount from "../components/ProjectsCount";

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
        <div id="about" className={active ? "section about active_section" : "section about inactive"}>
            <h1>About</h1>
            <p>
                ABOUT - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend
                tristique, lorem magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus
                facilisis. Aenean vel porta turpis, ut iaculis justo.
            </p>
            <ProjectsCount />
        </div>
    );
}

export default About;

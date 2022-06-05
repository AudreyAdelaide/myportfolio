import React from "react";

function Skills() {
    window.onhashchange = (e) => console.log(window.location.hash);
    return (
        <section id="skills" className="section skills">
            <h1>Skills</h1>
        </section>
    );
}

export default Skills;

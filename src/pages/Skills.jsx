import React, { useState, useEffect } from "react";

function Skills() {
    const [active, setActive] = useState(false);
    const sectionName = "/skills";
    const section = window.location.pathname;

    useEffect(() => {
        if (section === sectionName) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, []);
    return (
        <div id="skills" className={active ? "section skills active_section" : "section skills"}>
            <h1>Skills</h1>
            <p>
                SKILLS - Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex velit, quis faucibus
                libero congue et. Quisque convallis eu nisl et congue. Vivamus eget augue quis ante malesuada
                ullamcorper. Sed orci nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
                sollicitudin nibh lacus, ut bibendum risus elementum a.
            </p>
        </div>
    );
}

export default Skills;

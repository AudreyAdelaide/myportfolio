import React, { useState, useEffect } from "react";

function Home() {
    const [active, setActive] = useState(false);
    const sectionName = "/";
    const section = window.location.pathname;

    useEffect(() => {
        if (section === sectionName) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [section]);
    return (
        <div id="home" className={active ? "section home active_section" : "section home inactive"}>
            <h1>Home</h1>
            <p>
                HOME - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend
                tristique, lorem magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus
                facilisis. Aenean vel porta turpis, ut iaculis justo.
            </p>
        </div>
    );
}

export default Home;

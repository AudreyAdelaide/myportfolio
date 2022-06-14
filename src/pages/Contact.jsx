import React, { useState, useEffect } from "react";

function Contact() {
    const [active, setActive] = useState(false);
    const sectionName = "/contact";
    const section = window.location.pathname;

    useEffect(() => {
        if (section === sectionName) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, []);
    return (
        <div id="contact" className={active ? "section contact active_section" : "section contact"}>
            <h1>Contact</h1>
            <p>
                CONTACT - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend
                tristique, lorem magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus
                facilisis. Aenean vel porta turpis, ut iaculis justo.
            </p>
        </div>
    );
}

export default Contact;

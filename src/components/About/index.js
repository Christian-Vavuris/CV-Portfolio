import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return(
        <section className = "my-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt = "cover" />
            <h2 id="description">Hello, my name is Chris Vavuris.  This is my Berkeley Boot Camp Coding portfolio.  Check out my work below, and contact me to let me know your thoughts.</h2>
        </section>
    );
}

export default About;
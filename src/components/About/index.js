import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
import headshot from "../../assets/cover/Headshot.jpg"

function About() {
    return(
        <section className = "my-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt = "cover" />
            <div className="flex-row"><img src={headshot} className="my-2" style={{ width: "25%" }} alt = "cover" />
            <h2 style={{ width: "75%", padding: 15, marginTop: 50, marginBottom: 50}} className="my-2" id="description">Hello, my name is Chris Vavuris.  This is my Berkeley Boot Camp Coding portfolio; during the course I have learned many technologies like JavaScript, Node, SQL, Mongo, HTML, CSS, GitHub, React, and many more.  Check out my work below, and contact me to let me know your thoughts.</h2>
            </div>
        </section>
    );
}

export default About;
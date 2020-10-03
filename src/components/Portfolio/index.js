import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";


function About() {
    return(
        <section className = "my-5">
            <h1 id="about">About Me</h1>
            <div className="flex-row"><img src={headshot} className="my-2" style={{ width: "25%" }} alt = "cover" />
            <h2 style={{ width: "75%", padding: 15, marginTop: 50, marginBottom: 50}} className="my-2" id="description">Original Portfolio</h2>
            </div>
        </section>
    );
}
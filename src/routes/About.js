import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
    <div className="about__container">
        <span>
        "I made this web service so that everyone know the recently publish movie"
        </span>
        <span>SungminKim, {new Date().getFullYear()}</span>
    </div>
    );
}

export default About;
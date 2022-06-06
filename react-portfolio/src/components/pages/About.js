import React from "react";
import profilePic from "../../assets/Bretts-selfie.jpg";

export default function About() {
  return (
    <div id="about">
      <img id="Brett" alt="picture of Brett Hockridge" src={profilePic} />
      <h1><span id="nameSpan">Hi, I'm Brett!</span></h1>
      <p>
        My name is Brett Hockridge. I live in Orange County, California and have lived here my whole life. I am a Full-Stack Webdeveloper.
        I have knowledge in HTLM5, CSS, CSS-Frameworks, JavaScript, JQuery, Node.js, Express.js, Handlebars.js, MySQL, Sequelize, MongoDB, 
        Mongoose, and React.js. With these skills I focuse on creating a responsive web applications that will enhance the users overall 
        experience.
      </p>
      <p>
        I graduated from Esperanza High School and then went to Santa Ana College to study EMT. I completed the course and ended with a 
        certificate for Emergency Medical Technican. My career history involves multiple serves jobs since I was about 16 years old. The 
        job im currently working at is 24 Hour Fitness as a Sales and Service Expert. I have also graduated from UCI online coding course.
      </p>
      <p>
        I am a beginner coder that is extremely excited to learn everything there is to learn about Full-Stack webdevelopment. I am dedicated 
        to expanding my knowledge and skills. With my extensive work history and expert sales skills, i'll be able to polish my coding career 
        and continue to improve my current skills. See all my coding work at https://github.com/BroBrett.
      </p>
    </div>
  );
}
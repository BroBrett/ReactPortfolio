import React from "react";
import profilePic from "../../assets/Bretts-selfie.jpg";

export default function About() {
  return (
    <div id="about">
      <img id="Brett" alt="picture of Brett Hockridge" src={profilePic} />
      <h1><span id="nameSpan">Hi, I'm Brett!</span></h1>
      <p>
        {/* about me */}
      </p>
      <p>
        {/* school */}
      </p>
      <p>
        {/* developer */}
      </p>
    </div>
  );
}
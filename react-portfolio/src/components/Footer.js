import React from "react";

const Footer = () => {
  return (
    <div className="logolinks flex-inline justify-content-center">
    <div className="logos">
      <a id="github" href="https://github.com/BroBrett" className="githublogo" target="_blank" rel="noreferrer">
        <i class="fab fa-github-square fa-3x contact">GitHub</i>
      </a>

      <a
        id="myemail"
        href="mailto:brettstephenhockridge@yahoo.com"
        alt="email Brett Hockridge"
        title="email me at brettstephenhockridge@yahoo.com"
      >
        <i class="fa fa-envelope fa-3x contact" id="emaillogo">Email</i>
      </a>

      </div>  
      <footer className="copyright has-text-centered">
        <h4>
          <strong>© Brett Hockridge™</strong> Full-Stack Portfolio. All Rights
          Reserved.
        </h4>
        
      </footer>
      
    </div>
  );
};

export default Footer;
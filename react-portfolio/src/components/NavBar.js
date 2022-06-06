import React from "react";

function NavBar({ currentPage, setCurrentPage }) {
    return (
      <div id="tabs">
        <div className="nav nav-tabs nav-fill" id="nav-tab">
          <a
            href="#about"
            onClick={() => setCurrentPage('About')}
            className={currentPage === 'About' ? 'nav-item nav-link active' : 'nav-item  nav-link'}
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={() => setCurrentPage('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-item  nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={() => setCurrentPage('Contact')}
            className={currentPage === 'Contact' ? 'nav-item  nav-link active' : 'nav-item nav-link'}
          >
            Contact
          </a>
          <a
            href="#resume"
            onClick={() => setCurrentPage('Resume')}
            className={currentPage === 'Resume' ? 'nav-item nav-link active' : 'nav-item nav-link'}
          >
            Resume
          </a>
        </div>
      </div>
    );
  }
  
  export default NavBar;
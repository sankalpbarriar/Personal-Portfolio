import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>
    </>
  );
};

const NavContent = () => {
  return (
    <>
      <h2>Sankalp.</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        {/* <a href="#testimonials">Testimonials</a> Corrected spelling */}
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:sankalpbarriar10@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;

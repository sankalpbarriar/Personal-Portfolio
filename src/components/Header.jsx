import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};
const NavContent = ({ setMenuOpen }) => {
  return (
    <>
      <h2>Sankalp</h2>
      <div>
        <a onClick={() => setMenuOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)} href="#timeline">
          Experience
        </a>
        <a onClick={() => setMenuOpen(false)} href="#work">
          Work
        </a>
        <a onClick={() => setMenuOpen(false)} href="#services">
          Services
        </a>
        <a onClick={() => setMenuOpen(false)} href="#skills">
          Skills
        </a>
        {/* <a href="#testimonials">Testimonials</a> Corrected spelling */}
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
      </div>
      <a
        onClick={() => setMenuOpen(false)}
        href="mailto:sankalpbarriar10@gmail.com"
      >
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;

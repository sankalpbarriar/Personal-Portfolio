import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/114381745?v=4"
          alt="Founder"
        />
        <h2>Sankalp Barriar</h2>
        <p>Form is temorary but, class is Permanent</p>
      </div>

      <aside>
        <h2>Socail Media</h2>
        <article>
          <a
            href="https://www.linkedin.com/in/sankalp-barriar-211793199"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/sankalp-barriar"
            target="blank"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.instagram.com/sankalp_barriar/?next=%2F"
            target="blank"
          >
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
}

export default Footer;

import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
  AiFillLinkedin,
} from "react-icons/ai";
import dss from "../assets/without bhg.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={dss}
          alt="Founder"
        />

        <h2>Durgesh Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/durgesh-singh-solanki-softwareengineer/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/durgesh.s.solanki/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/DurgeshSingh143" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

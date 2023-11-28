import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsArrowDown } from "react-icons/bs";
import me from "../assets/without bhg.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = ()=> {
    animate(0, 100, {
        duration: 1,
        onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectsCount = ()=> {
    animate(0, 500, {
        duration: 1,
        onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Durgesh Singh
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:durgeshsinghsolanki181@gmail.com">Hire Me</a>
            <a href="#work">
              Project's <BsArrowUpRight />{" "}
            </a>
          </div>

          <article>
            <p>
              +
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              >
                100
              </motion.span>
            </p>

            <span>Client's Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +<motion.span whileInView={animationProjectsCount} ref={projectCount}>500</motion.span>
              </p>

              <span>Project's Done</span>
            </article>

            <article data-special>
              <p>Contact</p>

              <span>durgeshsinghsolanki181@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Abhishek" />
      </section>

      <BsArrowDown />
    </div>
  );
};

export default Home;

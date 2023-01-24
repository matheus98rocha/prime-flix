import { useState } from "react";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { BiUser } from "react-icons/bi";

import "./contactMenu.css";

const ContactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`contact-menu ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={"open-icon"}>
        <BiUser className={"main-icon"} />
      </button>

      <div className="menu">
        <a
          href="https://www.linkedin.com/in/matheus-rocha-79185b169/"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedinOption />
          <span>Linkedin</span>
        </a>

        <a
          href="https://github.com/matheus98rocha/prime-flix"
          target="_blank"
          rel="noreferrer"
        >
          <GrGithub />
          <span>Github</span>
        </a>
      </div>
    </div>
  );
};

export default ContactMenu;

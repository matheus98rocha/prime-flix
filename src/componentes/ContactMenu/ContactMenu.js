import { useState } from "react";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { BsShare } from "react-icons/bs";

import "./contactMenu.css";

const ContactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`contact-menu ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={"open-icon"}>
        <BsShare
          className={"main-icon"}
        />
      </button>

      <div className="menu">
        <button>
          <GrLinkedinOption />
          <span>Linkedin</span>
        </button>

        <button>
          <GrGithub />
          <span>Github</span>
        </button>
      </div>
    </div>
  );
};

export default ContactMenu;

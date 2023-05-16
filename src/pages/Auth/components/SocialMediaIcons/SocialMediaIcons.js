import React from "react";

import * as I from "react-icons/ai";
import { SocialMediaWrapper } from "./SocialMediaIcons.styles";

function SocialMediaIcons({ handleLoginGoogle }) {
  return (
    <SocialMediaWrapper>
      <I.AiFillGithub size={35} />
      <I.AiFillGoogleCircle size={35} onClick={handleLoginGoogle} />
    </SocialMediaWrapper>
  );
}

export default SocialMediaIcons;

import React from "react";

import * as I from "react-icons/ai";
import { SocialMediaWrapper } from "./SocialMediaIcons.styles";

function SocialMediaIcons() {
  return (
    <SocialMediaWrapper>
      <I.AiFillGithub size={30} />
      <I.AiFillGoogleCircle size={30} />
    </SocialMediaWrapper>
  );
}

export default SocialMediaIcons;

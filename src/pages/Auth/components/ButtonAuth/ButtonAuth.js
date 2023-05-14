import React from "react";
import { WrapperButton } from "./ButtonAuth.styles";

function ButtonAuth({ text, handleClick, type }) {
  return (
    <WrapperButton onClick={handleClick} type={type}>
      {text}
    </WrapperButton>
  );
}

export default ButtonAuth;

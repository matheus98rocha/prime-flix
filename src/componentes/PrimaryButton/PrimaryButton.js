import React from "react";
import { ButtonWrapper } from "./primaryButton.styles";

function PrimaryButton({ buttonWidth, category, children, fn, typeButton }) {
  return (
    <ButtonWrapper
      width={buttonWidth}
      category={category}
      onClick={fn}
      type={typeButton}
    >
      {children}
    </ButtonWrapper>
  );
}

export default PrimaryButton;

import React from "react";
import { ButtonWrapper } from "./primaryButton.styles";

function PrimaryButton({ buttonWidth, category, children, fn }) {
  return (
    <ButtonWrapper width={buttonWidth} category={category} onClick={fn}>
      {children}
    </ButtonWrapper>
  );
}

export default PrimaryButton;

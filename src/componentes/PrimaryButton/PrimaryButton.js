import React from "react";
import { ButtonWrapper } from "./primaryButton.styles";

function PrimaryButton({ buttonWidth, category, children }) {
  return (
    <ButtonWrapper width={buttonWidth} category={category}>
      {children}
    </ButtonWrapper>
  );
}

export default PrimaryButton;

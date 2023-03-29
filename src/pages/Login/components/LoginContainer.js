import React from "react";
import PrimaryButton from "../../../componentes/PrimaryButton/PrimaryButton";
import { LoginContainerWrapper } from "./loginContainer.styles";

function LoginContainer({ handleSubmit }) {
  
  return (
    <LoginContainerWrapper onSubmit={(event) => handleSubmit(event)}>
      <PrimaryButton buttonWidth={"100%"} category={"sucess"} fn={() => {}}>
        Entrar
      </PrimaryButton>
    </LoginContainerWrapper>
  );
}

export default LoginContainer;

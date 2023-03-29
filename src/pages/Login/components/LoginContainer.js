import React from "react";
import PrimaryButton from "../../../componentes/PrimaryButton/PrimaryButton";
import { LoginContainerWrapper } from "./loginContainer.styles";

function LoginContainer() {
  return (
    <LoginContainerWrapper>
      <h2 style={{color: "white"}}>Entrar</h2>
      <input type={"email"} />
      <input type={"password"} />
      <PrimaryButton buttonWidth={"100%"} category={"warning"}>Entrar</PrimaryButton>
    </LoginContainerWrapper>
  );
}

export default LoginContainer;

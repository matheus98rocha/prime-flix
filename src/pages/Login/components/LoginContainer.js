import React from "react";
import { LoginContainerWrapper } from "./loginContainer.styles";

function LoginContainer() {
  return (
    <LoginContainerWrapper>
      <h2>Entrar</h2>
      <input type={"email"} />
      <input type={"password"} />
      <button type="submit">Entrar</button>
    </LoginContainerWrapper>
  );
}

export default LoginContainer;

import React from "react";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import { LoginWrapper } from "./login.styles";

function login() {
  
  return (
    <LoginWrapper>
      <LoginContainer handleSubmit={() => {}} />
    </LoginWrapper>
  );
}

export default login;

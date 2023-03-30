import React from "react";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import { LoginWrapper } from "./login.styles";

function login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Working")
  };

  return (
    <LoginWrapper>
      <LoginContainer handleSubmit={handleSubmit} />
    </LoginWrapper>
  );
}

export default login;

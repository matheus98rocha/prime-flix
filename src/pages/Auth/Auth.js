import React, { useEffect, useState } from "react";
import BackgroudImageLogin from "../../assets/backgroud-login-image.png?asset";

import * as S from "./Auth.styles";
import ButtonAuth from "./components/ButtonAuth/ButtonAuth";
import Login from "./layout/Login/Login";
import CreateUser from "./layout/CreateUser/CreateUser";
import { useAuthContext } from "../../context/authContext";
import {  useNavigate } from "react-router-dom";

function Signup() {
  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState("login");
  const { userData } = useAuthContext();
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  useEffect(()=>{
    if(userData){
      navigate("/movies")
    }
  },[userData,navigate])

  return (
    <S.AuthWrapper>
      <S.BackgroundImage
        src={BackgroudImageLogin}
        alt={"movies-backgroud"}
        effect="blur"
        delayMethod="throttle"
        threshold={100}
      />
      <div className="main-content">
        <div className="left-content-wrapper">
          <h1>Bem vindo</h1>
          {step === "login" && <h2>Crie sua conta</h2>}
          {step === "createUser" && <h2>Faça seu login</h2>}
          <ButtonAuth
            text={step === "login" ? "Criar Conta" : "Faça seu login"}
            handleClick={
              step === "login"
                ? () => setStep("createUser")
                : () => setStep("login")
            }
          />
        </div>
        {step === "login" && (
          <Login
            checked={checked}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
        {step === "createUser" && <CreateUser />}
      </div>
    </S.AuthWrapper>
  );
}

export default Signup;

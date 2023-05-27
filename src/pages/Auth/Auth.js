import React, { Suspense, lazy, useEffect, useState } from "react";
import BackgroudImageLogin from "../../assets/backgroud-login-image.png?asset";

import * as S from "./Auth.styles";
import ButtonAuth from "./components/ButtonAuth/ButtonAuth";
import Loading from "../../componentes/Loading/Loading";
const Login = lazy(() => import("./layout/Login/Login"));
const CreateUser = lazy(() => import("./layout/CreateUser/CreateUser"));

function Signup() {
  const [step, setStep] = useState("login");

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
        {/* <div> */}
          <Suspense fallback={<Loading />}>
            {step === "login" && <Login />}
            {step === "createUser" && <CreateUser />}
          </Suspense>
        {/* </div> */}
      </div>
    </S.AuthWrapper>
  );
}

export default Signup;

import React, { useEffect, useState } from "react";
import Loading from "../../componentes/Loading/Loading";
import BackgroudImageLogin from "../../assets/backgroud-login-image.png";

import * as S from "./Auth.styles";
import SocialMediaIcons from "./components/SocialMediaIcons/SocialMediaIcons";
import KeepLogged from "./components/KeepLogged/KeepLogged";
import ButtonAuth from "./components/ButtonAuth/ButtonAuth";
import InputAuth from "./components/InputAuth/InputAuth";

function Signup() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
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
        <div className="create-user-wrapper">
          <h1>Bem vindo</h1>
          <h2>Crie sua conta</h2>
          <ButtonAuth text={"Criar Conta"} handleClick={() => {}} />
        </div>
        <div className="login-wrapper">
          <InputAuth type="text" placeholder="E-mail" />
          <InputAuth type="password" placeholder="Senha" />
          <div className="wrapper-help-user">
            <KeepLogged
              label={"Manter-me Logado"}
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <p className="forgot-password">Esqueceu a senha</p>
          </div>
          <ButtonAuth text={"Login"} handleClick={() => {}} type={"reverse"} />
          <SocialMediaIcons />
        </div>
      </div>
    </S.AuthWrapper>
  );
}

export default Signup;

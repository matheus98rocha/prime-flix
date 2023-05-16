import React from "react";
import InputAuth from "../../components/InputAuth/InputAuth";
import KeepLogged from "../../components/KeepLogged/KeepLogged";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import { LoginWrapper } from "./login.styles";

import {
  app,
  auth,
  provider,
  signInWithPopup,
} from "../../../../services/firebase";
import { useNavigate } from "react-router-dom";

function Login({ checked, handleCheckboxChange }) {
  const navigate = useNavigate();
  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result)
      navigate("/movies");
    } catch (error) {
      console.error("Erro no login com o Google:", error);
      alert("Deu ruim meu camarada")
    }
  };

  return (
    <LoginWrapper>
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
      <SocialMediaIcons handleLoginGoogle={() => handleLoginWithGoogle()} />
    </LoginWrapper>
  );
}

export default Login;

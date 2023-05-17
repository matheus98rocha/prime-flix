import React from "react";
import InputAuth from "../../components/InputAuth/InputAuth";
import KeepLogged from "../../components/KeepLogged/KeepLogged";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import { LoginWrapper } from "./login.styles";
import { useAuthContext } from "../../../../context/authContext";
import { useNavigate } from "react-router-dom";

function Login({ checked, handleCheckboxChange }) {
  const { handleLoginWithGooglePopUp } = useAuthContext();
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    try {
      await handleLoginWithGooglePopUp();
      if (checked) {
        localStorage.setItem("keepLoggedIn", "true");
      }
      navigate("/movies");
    } catch (error) {
      alert("Opss... Algo deu errado.");
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

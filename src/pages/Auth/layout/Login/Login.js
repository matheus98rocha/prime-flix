import React from "react";
import InputAuth from "../../components/InputAuth/InputAuth";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import { LoginWrapper } from "./login.styles";
import { useAuthContext } from "../../../../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { handleLoginWithGoogle, handleLoginWithGitHub } = useAuthContext();
  const navigate = useNavigate();

  //Colocar toast de error nas duas funções abaixo

  const handleLoginGoogle = async () => {
    try {
      await handleLoginWithGoogle();
      navigate("/movies");
    } catch (error) {
      alert("Opss... Algo deu errado.");
    }
  };

  const handleLoginWithGithub = async () => {
    try {
      await handleLoginWithGitHub();
      navigate("/movies");
    } catch (error) {
      console.log(error)
      if (error.code === "auth/account-exists-with-different-credential") {
        console.log(
          "A conta já existe com um provedor diferente. Faça login usando o provedor correto."
        );
      }
    }
  };
  return (
    <LoginWrapper>
      <InputAuth type="text" placeholder="E-mail" />
      <InputAuth type="password" placeholder="Senha" />
      <div className="wrapper-help-user">
        <p className="forgot-password">Esqueceu a senha</p>
      </div>
      <ButtonAuth text={"Login"} handleClick={() => {}} type={"reverse"} />
      <SocialMediaIcons
        handleLoginGoogle={() => handleLoginGoogle()}
        handleLoginGithub={() => handleLoginWithGithub()}
      />
    </LoginWrapper>
  );
}

export default Login;

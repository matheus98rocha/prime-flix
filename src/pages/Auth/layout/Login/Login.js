import React, { useState } from "react";
import InputAuth from "../../components/InputAuth/InputAuth";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import { LoginWrapper } from "./login.styles";
import { useAuthContext } from "../../../../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { handleLoginWithGoogle, handleLoginWithGitHub } = useAuthContext();
  const [userData, setUserData] = useState({
    email: "",
    passowrd: "",
  });
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
      if (error.code === "auth/account-exists-with-different-credential") {
      }
    }
  };
  return (
    <LoginWrapper>
      <form>
        <InputAuth
          type="text"
          placeholder="E-mail"
          handleOnChange={(event) =>
            setUserData((prev) => {
              return {
                ...prev,
                email: event.target.value,
              };
            })
          }
        />
        <InputAuth
          type="password"
          placeholder="Senha"
          handleOnChange={(event) =>
            setUserData((prev) => {
              return {
                ...prev,
                passowrd: event.target.value,
              };
            })
          }
        />
        <div className="wrapper-help-user">
          <p className="forgot-password">Esqueceu a senha</p>
        </div>
        <ButtonAuth text={"Login"} handleClick={() => {}} type={"reverse"} />
      </form>
      <SocialMediaIcons
        handleLoginGoogle={() => handleLoginGoogle()}
        handleLoginGithub={() => handleLoginWithGithub()}
      />
    </LoginWrapper>
  );
}

export default Login;

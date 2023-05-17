import React from "react";
import InputAuth from "../../components/InputAuth/InputAuth";
import KeepLogged from "../../components/KeepLogged/KeepLogged";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import { LoginWrapper } from "./login.styles";

import { auth, provider, signInWithPopup } from "../../../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../context/authContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ checked, handleCheckboxChange }) {
  const navigate = useNavigate();
  const { userData, setUserData } = useAuthContext();
  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        const { uid, displayName, email, photoURL } = result.user;
        setUserData({ uid, displayName, email, photoURL });
      }

      navigate("/movies");
    } catch (error) {
      toast.warning("Algo deu errado no login... Tente novamente mais tarde", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "loginError",
      });
    }
  };
  console.log(userData);
  return (
    <LoginWrapper>
      <ToastContainer />
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

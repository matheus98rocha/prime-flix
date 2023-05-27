import React, { useState } from "react";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import InputAuth from "../../components/InputAuth/InputAuth";
import { useAuthContext } from "../../../../context/authContext";
import { WrapperForm } from "./createUser.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { handleCreateUser } = useAuthContext();
  const handleOnSubmitForm = (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      toast.error("As senhas estão diferentes", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "movieAlreadyExists",
      });
      return;
    }

    if (password.length <= 6) {
      toast.error("A senha deve ter no minimo 6 caracteres", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "movieAlreadyExists",
      });
      return;
    }

    handleCreateUser(email, password, userName);
  };
  return (
    <>
      <WrapperForm onSubmit={handleOnSubmitForm}>
        <InputAuth
          type={"text"}
          placeholder={"Digite o seu nome completo"}
          handleOnChange={(event) => setUserName(event.target.value)}
        />
        <InputAuth
          type={"email"}
          placeholder={"Digite o seu e-mail"}
          handleOnChange={(event) => setEmail(event.target.value)}
        />
        <InputAuth
          type={"password"}
          placeholder={"Digite o sua senha"}
          handleOnChange={(event) => setPassword(event.target.value)}
        />
        <InputAuth
          type={"password"}
          placeholder={"Repita sua senha"}
          handleOnChange={(event) => setRepeatPassword(event.target.value)}
        />
        <ButtonAuth
          handleClick={() => handleCreateUser()}
          text={"Criar sua conta"}
          type={"reverse"}
        />
      </WrapperForm>
      <ToastContainer />
    </>
  );
}

export default CreateUser;

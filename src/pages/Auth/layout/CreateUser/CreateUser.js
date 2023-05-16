import React from "react";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import InputAuth from "../../components/InputAuth/InputAuth";

function CreateUser() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <InputAuth type={"email"} placeholder={"Digite o seu e-mail"} />
      <InputAuth type={"password"} placeholder={"Digite o sua senha"} />
      <InputAuth type={"password"} placeholder={"Repita sua senha"} />
      <ButtonAuth
        handleClick={() => {}}
        text={"Criar sua conta"}
        type={"reverse"}
      />
    </div>
  );
}

export default CreateUser;

import React from "react";
import DefaultInput from "../../../../componentes/DefaultInput/DefaultInput";
import PrimaryButton from "../../../../componentes/PrimaryButton/PrimaryButton";
import { LoginContainerWrapper } from "./loginContainer.styles";

import { FormProvider, useForm } from "react-hook-form";
import { userServices } from "../../../../services/api";

function LoginContainer() {
  const methods = useForm();
  const { register, handleSubmit } = methods;

  const onSubmit = (data) => {
    userServices.login(data.email,data.password).then(() => {
      alert("Logado com sucesso") 
    }).catch(e => alert(e.message));
  };

  return (
    <FormProvider {...methods}>
      <LoginContainerWrapper onSubmit={handleSubmit(onSubmit)}>
        <div className="main-content">
          <DefaultInput
            width={"100%"}
            type={"email"}
            placeholder={"Digite seu e-mail"}
            defaultValue="test"
            {...register("email")}
          />
          <DefaultInput
            width={"100%"}
            type={"password"}
            placeholder={"Digite sua senha"}
            {...register("password")}
          />

          <PrimaryButton
            buttonWidth={"100%"}
            category={"action"}
            fn={() => {}}
            typeButton={"submit"}
          >
            Entrar
          </PrimaryButton>
        </div>
        <hr />
        <PrimaryButton
          buttonWidth={"100%"}
          category={"sucess"}
          fn={() => {}}
          typeButton={"submit"}
        >
          Criar nova conta
        </PrimaryButton>
      </LoginContainerWrapper>
    </FormProvider>
  );
}

export default LoginContainer;

import React from "react";
import { InputWrapper } from "./defaultInput.styles";
import {useFormContext } from "react-hook-form";

const  DefaultInput = React.forwardRef((props,ref) => {
  const { register} = useFormContext();

  return (
    <InputWrapper
      width={props.width}
      type={props.type}
      placeholder={props.placeholder}
      {...register(props.name)}
    />
  );
})

export default DefaultInput;

import React from "react";
import { InputAuthWrapper } from "./inputAuth.styles";

function InputAuth({ type, placeholder,handleOnChange }) {
  return (
    <InputAuthWrapper type={type} placeholder={placeholder} onChange={handleOnChange}/>
  );
}

export default InputAuth;

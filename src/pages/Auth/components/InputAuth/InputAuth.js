import React from "react";
import { InputAuthWrapper } from "./inputAuth.styles";

function InputAuth({ type, placeholder }) {
  return (
    <InputAuthWrapper type={type} placeholder={placeholder}/>
  );
}

export default InputAuth;

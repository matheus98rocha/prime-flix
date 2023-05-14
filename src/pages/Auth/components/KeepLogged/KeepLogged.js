import React from "react";

import * as S from "./KeepLogged.styles";

const KeepLogged = ({ label, checked, onChange }) => {
  return (
    <S.CheckboxWrapper>
      <S.CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <S.CheckboxStyled />
      <S.CheckboxLabel>{label}</S.CheckboxLabel>
    </S.CheckboxWrapper>
  );
};

export default KeepLogged;

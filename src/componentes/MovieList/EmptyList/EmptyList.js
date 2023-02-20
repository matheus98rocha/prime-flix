import React from "react";

import { EmptyListWrapper } from "./emptyList.styles";

const EmptyList = () => {
  return (
    <EmptyListWrapper>
      <h2>Não encontramos nada por aqui...</h2>
    </EmptyListWrapper>
  );
};

export default EmptyList;

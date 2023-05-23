import React from "react";
import { ModalUserStyles } from "./modalUser.styles";

function ModalUser({ handleLogout }) {
  return (
    <ModalUserStyles>
      <button onClick={handleLogout}>Sair</button>
    </ModalUserStyles>
  );
}

export default ModalUser;

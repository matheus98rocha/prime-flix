import React from "react";
import Header from "../layout/Header/Header";

function AuthenticatedRoutes({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default AuthenticatedRoutes;

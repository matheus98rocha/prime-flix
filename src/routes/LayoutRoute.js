import React from "react";
import Header from "../layout/Header/Header";
import IsLoggedRoute from "./IsLoggedRoute";

function LayoutRoute({ children }) {
  return (
    <IsLoggedRoute>
      <Header />
      {children}
    </IsLoggedRoute>
  );
}

export default LayoutRoute;

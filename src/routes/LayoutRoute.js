import React, { Suspense, lazy } from "react";
import Header from "../layout/Header/Header";
import IsLoggedRoute from "./IsLoggedRoute";
import Loading from "../componentes/Loading/Loading";


function LayoutRoute({ children }) {
  return (
    <IsLoggedRoute>
      <Suspense fallback={<p>Matheusss</p>}>
        <Header />
        {children}
      </Suspense>
    </IsLoggedRoute>
  );
}

export default LayoutRoute;

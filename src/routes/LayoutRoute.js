import React, { Suspense } from "react";
import Header from "../layout/Header/Header";
import IsLoggedRoute from "./IsLoggedRoute";
import Loading from "../componentes/Loading/Loading";

function LayoutRoute({ children }) {
  return (
    <IsLoggedRoute>
      <Suspense fallback={<Loading />}>
        <Header />
        {children}
      </Suspense>
    </IsLoggedRoute>
  );
}

export default LayoutRoute;

import React, { Suspense } from "react";
import Header from "../layout/Header/Header";
import IsNotLoggedRoute from "./IsNotLoggedRoute";
import Loading from "../componentes/Loading/Loading";

function LayoutRoute({ children }) {
  return (
    <IsNotLoggedRoute>
      <Suspense fallback={<Loading />}>
        <Header />
        {children}
      </Suspense>
    </IsNotLoggedRoute>
  );
}

export default LayoutRoute;

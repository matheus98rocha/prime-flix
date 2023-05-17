import { Route, Navigate, Routes } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { userData } = useAuthContext();
  console.log("dale", userData);
  return (
    <Routes>
      <Route
        {...rest}
        element={userData ? <Component /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

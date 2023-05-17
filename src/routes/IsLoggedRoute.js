import { Route, Navigate, Routes } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function IsLoggedRoute({ component: Component, ...rest }) {
  const { userData } = useAuthContext();
  return (
    <Routes>
      <Route
        {...rest}
        element={userData ? <Component /> : <Navigate to="/movies" />}
      />
    </Routes>
  );
}

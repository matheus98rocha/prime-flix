import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function IsNotLoggedRoute({ children }) {
  const { userData } = useAuthContext();

  if (!userData) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
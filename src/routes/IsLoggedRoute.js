import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function IsLoggedRoute({ children }) {
  const { userData } = useAuthContext();

  console.log("this", userData);

  if (!userData) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

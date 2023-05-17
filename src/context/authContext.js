import { React, createContext, useContext, useState } from "react";
import { servicesFirebase } from "../services/firebase/firebaseServices";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const handleLoginWithGooglePopUp = async (keepLogged) => {
    const result = await servicesFirebase.authWithGooglePopUp();
    if (result) {
      const { uid, displayName, email, photoURL } = result.user;
      setUserData({ uid, displayName, email, photoURL });
    }
  };
  console.log(userData);
  return (
    <AuthContext.Provider
      value={{ userData, setUserData, handleLoginWithGooglePopUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const { userData, setUserData, handleLoginWithGooglePopUp } =
    useContext(AuthContext);

  return { userData, setUserData, handleLoginWithGooglePopUp };
};

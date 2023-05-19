import { React, createContext, useContext, useEffect, useState } from "react";
import { servicesFirebase } from "../services/firebase/firebaseServices";
import { auth } from "../services/firebase/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const handleLoginWithGooglePopUp = async () => {
    const result = await servicesFirebase.authWithGooglePopUp();
    if (result) {
      const { uid, displayName, email, photoURL } = result.user;
      setUserData({ uid, displayName, email, photoURL });
    }
  };

  const handleCreateUser = async () => {
    const user = await servicesFirebase.signup(
      "maluco-perdi@gmail.com",
      "15021998cma"
    );

    return user;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user)
      setUserData(user);
    });

    // Limpe o listener quando o componente for desmontado
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        handleLoginWithGooglePopUp,
        handleCreateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const {
    userData,
    setUserData,
    handleLoginWithGooglePopUp,
    handleCreateUser,
  } = useContext(AuthContext);

  return {
    userData,
    setUserData,
    handleLoginWithGooglePopUp,
    handleCreateUser,
  };
};

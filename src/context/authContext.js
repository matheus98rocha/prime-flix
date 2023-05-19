import { React, createContext, useContext, useEffect, useState } from "react";
import { servicesFirebase } from "../services/firebase/firebaseServices";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const checkLoggedInUser = async () => {
      const keepLoggedIn = localStorage.getItem("keepLoggedIn");
      console.log(keepLoggedIn);
      if (keepLoggedIn) {
        const user = await servicesFirebase.getCurrentUser();
        const { uid, displayName, email, photoURL } = user;
        setUserData({ uid, displayName, email, photoURL });
      } else {
        return setUserData("");
      }
    };

    checkLoggedInUser();
  }, []);

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

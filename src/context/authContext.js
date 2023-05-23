import { React, createContext, useContext, useEffect, useState } from "react";
import { servicesFirebase } from "../services/firebase/firebaseServices";
import { auth } from "../services/firebase/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const handleLoginWithGitHub = async () => {
    const result = await servicesFirebase.loginWithGithub().then((e) => e);
    console.log(result.error)
    if (result) {
      const { uid, displayName, email, photoURL, accessToken } = result.user;
      console.log("dalee", accessToken);
      localStorage.setItem("@token-user", accessToken);
      setUserData({ uid, displayName, email, photoURL, accessToken });
    }
  };

  const handleLoginWithGoogle = async () => {
    const result = await servicesFirebase.authWithGooglePopUp().then((e) => e);
    if (result) {
      const { uid, displayName, email, photoURL, accessToken } = result.user;
      localStorage.setItem("@token-user", accessToken);
      setUserData({ uid, displayName, email, photoURL, accessToken });
    }
  };

  const handleCreateUser = async () => {
    const user = await servicesFirebase.signup(
      "maluco-perdi@gmail.com",
      "15021998cma"
    );

    return user;
  };

  const handleLoginWithToken = async (savedAccesToken) => {
    const result = await servicesFirebase.loginWithToken(savedAccesToken);
    console.log("daleee", result);
    return result;
  };
  useEffect(() => {
    const savedAccesToken = localStorage.getItem("minhaChave");
    if (savedAccesToken) {
      handleLoginWithToken(savedAccesToken);
    }
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserData(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        handleLoginWithGoogle,
        handleLoginWithGitHub,
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
    handleLoginWithGoogle,
    handleLoginWithGitHub,
    handleCreateUser,
  } = useContext(AuthContext);

  return {
    userData,
    setUserData,
    handleLoginWithGoogle,
    handleLoginWithGitHub,
    handleCreateUser,
  };
};

import { React, createContext, useContext, useEffect, useState } from "react";
import { servicesFirebase } from "../services/firebase/firebaseServices";
import { auth } from "../services/firebase/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const handleLoginWithGitHub = async () => {
    const result = await servicesFirebase.loginWithGithub().then((e) => e);
    console.log(result.error);
    if (result) {
      const { accessToken } = result.user;
      localStorage.setItem("@token-user", accessToken);
      return result;
    }
  };

  const handleLoginWithGoogle = async () => {
    const result = await servicesFirebase.authWithGooglePopUp().then((e) => e);
    if (result) {
      const { accessToken } = result.user;
      localStorage.setItem("@token-user", accessToken);
      return result;
    }
  };

  const handleCreateUser = async (emailParam, password, userName) => {
    const result = await servicesFirebase.signup(
      emailParam,
      password,
      userName
    );
    return result;
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
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

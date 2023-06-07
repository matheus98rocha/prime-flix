import { React, createContext, useContext, useEffect, useState } from "react";
import { servicesFirebase } from "../services/firebase/firebaseServices";
import { auth } from "../services/firebase/firebase";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSignOut,
} from "react-firebase-hooks/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoadingUserContext, setIsLoadingUserContext] = useState(false);

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const [signOut, error] = useSignOut(auth);

  useEffect(() => {
    if (useCreateUserWithEmailAndPassword.loading || useSignOut.loading) {
      setIsLoadingUserContext(true);
    } else {
      setIsLoadingUserContext(false);
    }
  }, []);

  const handleLoginWithGitHub = async () => {
    const result = await servicesFirebase.loginWithGithub().then((e) => e);
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
    await createUserWithEmailAndPassword(emailParam, password);

    if (user && !isLoadingUserContext) {
      setUserData(user);
    }
  };

  const handleLogoutUser = async () => {
    await signOut();
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
        isLoadingUserContext,
        handleLogoutUser,
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
    isLoadingUserContext,
    handleLogoutUser,
  } = useContext(AuthContext);

  return {
    userData,
    setUserData,
    handleLoginWithGoogle,
    handleLoginWithGitHub,
    handleCreateUser,
    isLoadingUserContext,
    handleLogoutUser,
  };
};

import { React, createContext, useContext, useEffect, useState } from "react";
import { servicesFirebase } from "../services/firebase/firebaseServices";
import { auth } from "../services/firebase/firebase";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoadingUserContext, setIsLoadingUserContext] = useState(false);

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating] = useUpdateProfile(auth);

  useEffect(() => {
    if (loading === true || updating === true) {
      setIsLoadingUserContext(true);
    } else {
      setIsLoadingUserContext(false);
    }
  }, [loading, updating]);

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
      await updateProfile({ displayName: userName });
      setUserData(user);
    }
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
  } = useContext(AuthContext);

  return {
    userData,
    setUserData,
    handleLoginWithGoogle,
    handleLoginWithGitHub,
    handleCreateUser,
    isLoadingUserContext,
  };
};

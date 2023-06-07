import { React, createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase/firebase";

import {
  useCreateUserWithEmailAndPassword,
  useSignOut,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoadingUserContext, setIsLoadingUserContext] = useState(false);

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [signOut] = useSignOut(auth);

  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (
      useCreateUserWithEmailAndPassword.loading ||
      useSignOut.loading ||
      useSignInWithGithub.loading ||
      useSignInWithGoogle.loading ||
      useSignInWithEmailAndPassword.loading
    ) {
      setIsLoadingUserContext(true);
    } else {
      setIsLoadingUserContext(false);
    }
  }, []);

  const handleLoginWithGitHub = async () => {
    await signInWithGithub();
    const userGit = useSignInWithGithub.user;
    return userGit;
  };

  const handleLoginWithGoogle = async () => {
    await signInWithGoogle();
    const userGoogle = useSignInWithGoogle.user;
    return userGoogle;
  };

  const handleLoginWithEmailAndPassword = async (email, password) => {
    await signInWithEmailAndPassword(email, password);
    const userLogged = useSignInWithEmailAndPassword.user;
    return userLogged;
  };

  const handleCreateUser = async (emailParam, password) => {
    await createUserWithEmailAndPassword(emailParam, password);

    if (useCreateUserWithEmailAndPassword.user && !isLoadingUserContext) {
      setUserData(useCreateUserWithEmailAndPassword.user);
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
        handleLoginWithEmailAndPassword,
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
    handleLoginWithEmailAndPassword,
  } = useContext(AuthContext);

  return {
    userData,
    setUserData,
    handleLoginWithGoogle,
    handleLoginWithGitHub,
    handleCreateUser,
    isLoadingUserContext,
    handleLogoutUser,
    handleLoginWithEmailAndPassword,
  };
};

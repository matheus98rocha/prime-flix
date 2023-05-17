import { React, createContext, useContext, useEffect, useState } from "react";
import { servicesFirebase } from "../services/firebase/firebaseServices";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const checkLoggedInUser = async () => {
      const user = await servicesFirebase.getCurrentUser();
      console.log(user);
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        setUserData({ uid, displayName, email, photoURL });
      } else {
        // Verifique a preferência armazenada no localStorage ou cookie
        const keepLoggedIn = localStorage.getItem("keepLoggedIn");

        if (keepLoggedIn === "true") {
          // Realize o login novamente usando a preferência armazenada
          const result = await servicesFirebase.authWithToken();

          if (result) {
            const { uid, displayName, email, photoURL } = result.user;
            setUserData({ uid, displayName, email, photoURL });
          }
        }
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

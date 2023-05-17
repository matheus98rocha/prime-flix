import { React, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  return (
    <AuthContext.Provider value={{ userData,setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const { userData,setUserData } = useContext(AuthContext);

  return { userData,setUserData };
};

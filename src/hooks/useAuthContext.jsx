import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("userAuthContext must be used used an useTodoContextProvider");
  }
  return context;
};

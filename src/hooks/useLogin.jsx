import { useRef } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const error = useRef(true);

  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    if (email == "admin@gmail.com" && password == "1234") {
      error.current = false;
      localStorage.setItem("admin", JSON.stringify({ email, password }));
      dispatch({ type: "LOGIN", payload: { email, password } });
    } else {
      error.current = true;
    }
  };
  return { login, error };
};

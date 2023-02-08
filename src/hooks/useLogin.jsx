import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    if (email == "admin@gmail.com" && password == "1234") {
      setError(false);
      localStorage.setItem("admin", JSON.stringify({ email, password }));
      await dispatch({ type: "LOGIN", payload: { email, password } });
    } else {
      setError(true);
    }
  };
  return { login, error };
};

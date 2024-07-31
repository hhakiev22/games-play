import { useContext } from "react";
import { login } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);

  const loginHandler = async (email, password) => {
    try {
      const result = await login(email, password);

      changeAuthState(result);
      //TODO: update app state
    } catch (err) {
      console.log(err.message);
    }
  };

  return loginHandler;
};

import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
  userId: "",
  email: "",
  accessToken: "",
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
});

export function AuthContextProvider(props) {
  // const [authState, setAuthState] = useState({});
  const [authState, setAuthState] = usePersistedState("auth", {});

  const changeAuthState = (state) => {
    // TODO: Quick solution, fix by implementing persisted authState
    localStorage.setItem("accessToken", state.accessToken);

    setAuthState(state);
  };

  const contextData = {
    userId: authState?._id,
    email: authState?.email,
    accessToken: authState?.accessToken,
    isAuthenticated: !!authState?.email,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const authData = useState(AuthContext);

  return authData;
}

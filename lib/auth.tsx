/* https://docs.expo.dev/router/reference/authentication/ */

import { useContext, createContext, type PropsWithChildren } from "react";
import { useStorageState } from "@/hooks/use-storage-state";

const AuthContext = createContext<{
  login: () => void;
  logout: () => void;
  token?: string | null;
  isLoading: boolean;
}>({
  login: () => null,
  logout: () => null,
  token: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useAuth() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useAuth must be wrapped in a <TokenProvider />");
    }
  }

  return value;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [[isLoading, token], setToken] = useStorageState("token");

  return (
    <AuthContext.Provider
      value={{
        login: () => {
          // Perform sign-in logic here
          setToken("xxx");
        },
        logout: () => {
          setToken(null);
        },
        token,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

import { AuthContext } from "@contexts";
import { useContext } from "react";


export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) throw new Error("useAuth must be used within AuthProvider");

  return authContext;
};


import React, { useContext } from "react";
import AuthContext from "./AuthContext";

export default function useAuth() {
  return useContext(AuthContext);
}

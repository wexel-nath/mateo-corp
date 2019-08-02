import React, { useEffect, useState } from "react";
import { camelizeKeys as toCamelCase } from "humps";

import { getJwt, getRefresh, clearTokens } from "../util/storage";
import { getUser } from "../api/authentication";

const useAuthentication = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const isLoggedIn = async () => {
    if (getJwt() && getRefresh()) {
      setLoading(true);
      const {
        data: { data }
      } = await getUser();
      setLoading(false);

      if (data) {
        setLoggedIn(toCamelCase(data));
        return;
      }
    }
    clearTokens();
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  const setLoggedIn = user => {
    setUser(user);
    setIsAuthenticated(true);
    setLoading(false);
  };

  const setLoggedOut = () => {
    setUser({});
    setIsAuthenticated(false);
    clearTokens();
  };

  return { user, isAuthenticated, loading, setLoggedIn, setLoggedOut };
};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuthentication()}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

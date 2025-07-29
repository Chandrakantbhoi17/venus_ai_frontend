import React, { createContext, useContext, useState, useEffect } from "react";
import apiClient, { setAuthToken, clearAuthToken } from "../services/apiClient";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get("token"));

  const login = async (email, password) => {
    const response = await apiClient.post("/users/token", { email, password });

    setAuthToken(response.data.access_token);
  
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    clearAuthToken();
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = Cookies.get("token");

    const validateToken = async () => {
      try {
        if (token) {
          const res = await apiClient.get("users/me"); // or /profile, adjust to your backend
          setUser(res.data);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.warn("Invalid or expired token.");
        logout();
      }
    };

    validateToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

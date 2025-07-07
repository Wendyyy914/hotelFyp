import React, { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

export const AuthContext = createContext();
//stores the authentication state (e.g., whether the user is logged in,
//  user info, token) and provides it to components throughout the app.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  // Load user from token (if exists) on initial render
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Decode token to extract user info (optional)
      const userInfo = JSON.parse(atob(token.split(".")[1]));
      setUser(userInfo);
      setIsLoggedIn(true);  // Set user as logged in
      console.log("Decoded user info: ", userInfo);  // Log decoded user info
      console.log("LoggedIn state now is : ", isLoggedIn)
    
    } else {
      setIsLoggedIn(false);  // User is not logged in
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("/auth/login", { email, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      const userInfo = JSON.parse(atob(token.split(".")[1]));
      setUser(userInfo);

    } catch (error) {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

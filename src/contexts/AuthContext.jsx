import React, { createContext, useState, useContext } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  const login = (username) => {
    const token = `fake-token-${username}`;
    if (username === "admin@gmail.com") {
      setAdmin(true);
    }
    localStorage.setItem('authToken', token);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setAdmin(false);
  };

  const verificationLog = () => {
    const userToken = localStorage.getItem("authToken");
    if (userToken === "fake-token-admin@gmail.com") {
      setAdmin(true);
      setUser("admin@gmail.com");
    } else if (userToken) {
      const username = userToken.replace("fake-token-", "");
      setUser(username);
    }
  };

  // NUEVO: para usar directamente en Navigation.jsx o App.jsx
  const isAdmin = admin; // opcional, podés renombrarlo si querés

  return (
    <AuthContext.Provider value={{ user, login, logout, admin, isAdmin, verificationLog }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

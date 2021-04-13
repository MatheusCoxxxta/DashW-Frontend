/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from 'react';

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getStoragedData = () => {
      const storagedToken = localStorage.getItem('@dashw:token');
      const storagedUser = localStorage.getItem('@dashw:user');

      if (storagedToken && storagedUser) {
        setToken(storagedToken);
        setUser(storagedUser);
      }
    };
    getStoragedData();
  }, []);

  const signIn = (myToken, myUser) => {
    setToken(myToken);
    setUser(myUser);

    localStorage.setItem('@dashw:token', token);
    localStorage.setItem('@dashw:user', JSON.stringify(user));
  };

  const signOut = () => {
    setToken(null);
    setUser([]);

    localStorage.removeItem('@dashw:token');
    localStorage.removeItem('@dashw:user');
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!token,
        user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

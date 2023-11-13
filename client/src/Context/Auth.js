import axios from 'axios';
import React, { useState,useEffect, createContext, useContext } from 'react';

// Create a context with a default value
const AuthContext = createContext();

// Define your AuthProvider component
function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ user: null, token: "" });

//default axios
axios.defaults.headers.common['Authorization']=auth?.token;

    useEffect(()=>{
      const data = localStorage.getItem('auth');
      if(data)
      {
        const parseData = JSON.parse(data);
        setAuth({
          ...auth,
          user:parseData.user,
          token: parseData.token
        });
      }
      
    },[]);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};


//custom hook
const useAuth = () => useContext(AuthContext);

export {useAuth,AuthProvider};
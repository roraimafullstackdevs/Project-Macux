import { createContext, useContext, useState, useEffect } from "react";

import { createSessions, setAuthToken } from "../services/sessions.service";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const localstorageCustomer = "@expoferr2023macux:customers";
  const localstorageToken = "@expoferr2023macux:token";

  async function signIn({ email, password }) {
    try {
      const response = await createSessions({ email, password });
      const { customers, token } = response.data;

      localStorage.setItem(localstorageCustomer, JSON.stringify(customers));
      localStorage.setItem(localstorageToken, token);
      setAuthToken(token);

      setData({ customers, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem(localstorageToken);
    localStorage.removeItem(localstorageCustomer);

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem(localstorageToken);
    const customers = localStorage.getItem(localstorageCustomer);

    if (token && customers) {
      setAuthToken(token);

      setData({ token, customers: JSON.parse(customers) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, customers: data.customers }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider =  ({children}) => {
  const [user, setUser] = useState(null);

  const login = (user) =>{
    setUser(user);
    console.log(user);
  }

  const logout = () => {
    setUser(null);

    console.log('logout');
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout
    }}>
    {children}
  </AuthContext.Provider>
  )
  
}

export {AuthContext, AuthProvider};
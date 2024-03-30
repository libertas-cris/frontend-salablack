import { createContext, useState, useContext, useEffect } from "react";
import {api} from '../services/api';


export const AuthContext = createContext({});


function AuthProvider({children}){
  const [data, setData] = useState({});

  function signOut(){
    localStorage.removeItem('@salablack:token');
  
    setData({});
  }

  async function signIn({email, password}){

    try {
      const response = await api.post("/login", {email, password});
      const {user, token} = response.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({token});

      localStorage.setItem('@salablack:token', token);

      console.log(data);

   
    } catch (error) {
      alert("Usuário ou senha incorretos  ");
    }
  }

  

  useEffect(() => {
    const token = localStorage.getItem('@salablack:token');

  
    if(token) {

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setData({
        token,
      })
    }
  }, []);
  

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      token: data.token
    }}>

      {children}

    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};


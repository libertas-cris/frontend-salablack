import { createContext, useState, useContext, useEffect } from "react";
import {api} from '../services/api';
import { parse } from "postcss";


export const AuthContext = createContext({});


function AuthProvider({children}){
  const [data, setData] = useState({});

  function signOut(){
    // localStorage.removeItem('@salablack:user');
    localStorage.removeItem('@salablack:token');
    localStorage.removeItem('@salablack:expires'); 
  
    setData({});

  }

  async function signIn({email, password}){

    try {
      const response = await api.post("/login", {email, password});
      const currentTime = new Date().getTime();
      const {token} = response.data;

      localStorage.setItem('@salablack:token', token);
      localStorage.setItem('@salablack:expires', currentTime.toString());
      setData({token});
    
    } catch (error) {
      alert("Usuário ou senha incorretos  ");
    }
  }
  

  useEffect(() => {
    const TIMEOUT = 60 * 60 * 1000; 
  
    const token = localStorage.getItem('@salablack:token');
    const loginTime = parseInt(localStorage.getItem('@salablack:expires'), 10); // Obtenha o tempo de login convertido em milissegundos
    const currentTime = new Date().getTime();
  
    if (token && loginTime) {
      const elapsedTime = currentTime - loginTime; 
  
      if (elapsedTime > TIMEOUT) {
        alert('Sua sessão expirou! Faça login novamente');
        localStorage.removeItem('@salablack:expires');
        localStorage.removeItem('@salablack:token');
        setData({});
      } else {
        setData({token});
      }
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


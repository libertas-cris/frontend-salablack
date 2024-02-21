import { createContext, useState, useContext, useEffect } from "react";
import {api} from '../services/api';


export const AuthContext = createContext({});


function AuthProvider({children}){
  const [data, setData] = useState({});

  function signOut(){
    localStorage.removeItem('@salablack:user');
    localStorage.removeItem('@salablack:expires'); 
  
    setData({});
  }

  async function signIn({email, password}){

    try {
      const response = await api.get("/users/2");
      const currentTime = new Date().getTime();
      const {id, email, first_name, last_name, avatar} = response.data.data;

      const user = {
        id,
        email,
        first_name,
        last_name,
        avatar
      }


      localStorage.setItem('@salablack:user', JSON.stringify(user));
      localStorage.setItem('@salablack:expires', currentTime.toString());
      setData(user);
    
    } catch (error) {
      alert("Usuário ou senha incorretos  ");
    }
  }
  

  useEffect(() => {
    const TIMEOUT = 60 * 60 * 1000; 
  
    const user = localStorage.getItem('@salablack:user');
    const loginTime = parseInt(localStorage.getItem('@salablack:expires'), 10); // Obtenha o tempo de login convertido em milissegundos
    const currentTime = new Date().getTime();
  
    if (user && loginTime) {
      const elapsedTime = currentTime - loginTime; 
  
      if (elapsedTime > TIMEOUT) {
        alert('Sua sessão expirou! Faça login novamente');
        localStorage.removeItem('@salablack:expires');
        localStorage.removeItem('@salablack:user');
        setData({});
      } else {
        setData({user});
      }
    }
  }, []);
  

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data
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


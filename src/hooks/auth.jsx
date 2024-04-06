import { createContext, useState, useContext, useEffect } from "react";
import {api} from '../services/api';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext({});


function AuthProvider({children}){
  const [data, setData] = useState({});


  function signOut(){
    localStorage.removeItem('@salablack:token');
  
    setData({});
  }

  async function signUp ({name, email, password, phone}) {
    try {
      const response = await api.post('/user',{name, email, password, phone});
      toast.success('Usuário criado com sucesso');

    } catch (error){
      console.error(error.message);
    }
  }

  async function signIn({email, password}){

    try {
      const response = await api.post("/login", {email, password});
      const {token} = response.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({token});

      localStorage.setItem('@salablack:token', token);

      toast.success('Seja bem vindo(a)');
   
    } catch (error) {
      toast.error('E-mail ou senha incorreto');
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
      signUp,
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


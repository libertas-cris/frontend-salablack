import { createContext, useState, useContext, useEffect } from "react";
import {api} from '../services/api';


export const AuthContext = createContext({});


function AuthProvider({children}){
  const [data, setData] = useState({});

  function signOut(){
    // localStorage.removeItem('@salablack:user');
    localStorage.removeItem('@salablack:token'); //entender token como senha criptografada
  
    setData({});

  }

  async function signIn({email, password}){

    console.log(email);
    console.log(password);

    const response = await api.post("/login", {email, password});

    try {

      const {token} = response.data

      console.log(token);

      // localStorage.setItem('@salablack:user',JSON.stringify(user));
      localStorage.setItem('@salablack:token', token);

      setData({token});
    }catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert('não foi possível conectar');
      }
    }
  }

  useEffect(()=> {
    const token = localStorage.getItem('@salablack:token');

    if(token){
      setData({token});
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


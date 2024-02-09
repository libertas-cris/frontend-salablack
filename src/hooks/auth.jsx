import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({});


function AuthProvider({children}){
  const [data, setData] = useState({});

  function signOut(){
    localStorage.removeItem('@salablack:user');
    localStorage.removeItem('@salablack:token'); //entender token como senha criptografada
  
    setData
  }

  function signIn({email, password}){

    const response = {data:{user: "math", token: 123456}}; //Aqui vai a chamada da API

      const {user, token} = response.data

      console.log(user);

      localStorage.setItem('@salablack:user',JSON.stringify(user));
      localStorage.setItem('@salablack:token', token);

      setData({user, token});

    // try {
    //   const response = {data:{user: "math", token: 123456}}; //Aqui vai a chamada da API

    //   const {user, token} = response.data

    //   console.log(user);

    //   localStorage.setItem('@salablack:user',JSON.stringify(user));
    //   localStorage.setItem('@salablack:token', token);

    //   setData({user, token});
    // }catch(error){
    //   if(error.response){
    //     alert(error.response.data.message);
    //   }else {
    //     alert('não foi possível conectar');
    //   }
    // }
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user:data.user
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


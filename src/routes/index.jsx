import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { decodeToken, isExpired } from 'react-jwt';

export function Routes(){
  const {token} = useAuth();
  const decodedToken = decodeToken(token);
  const isExpiredToken = isExpired(token);

  if(decodedToken){
    const userID = decodedToken.sub;
  } else {
    console.error('Token inválido ou ausente');
  }
  


  return (
    <BrowserRouter>
    {
     (!isExpiredToken) ? <AppRoutes /> : 
    <AuthRoutes />}
    </BrowserRouter>
  )
}
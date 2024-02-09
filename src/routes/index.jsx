import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export function Routes(){
  const {token} = useAuth()
  console.log(token);

  return (
    <BrowserRouter>
    {token ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { AdminRoutes } from "./admin.routes";

export function Routes(){
  const {user} = useAuth()

  return (
    <BrowserRouter>
    {
     user.id ? <AppRoutes /> : 
    <AuthRoutes />}
    </BrowserRouter>
  )
}
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { useAuth } from "../hooks/auth";
import { decodeToken } from 'react-jwt';
import { useEffect, useState } from "react";
import Admins from '../utils/admins.json';

export function Routes() {
  const { token } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const decodedToken = decodeToken(token);
    if (decodedToken) {
      if (Admins.includes(decodedToken.email)) {
        setIsAdmin(true);
      }
    } else {
      setIsAdmin(false);
      console.error('Token inválido ou ausente');
    }
  }, [token]);

  return (
    <BrowserRouter>
      {isAdmin ? <AdminRoutes /> : token ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}

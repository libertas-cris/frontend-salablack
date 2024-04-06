import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { SignIn } from "../pages/signin";
import { SignUp } from "../pages/singup";

export function AuthRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/cadastrar" element = {<SignUp navigate={navigate}/>}/>
      <Route path="/" element = {<SignIn />}/>
      <Route path="*" element={<Navigate to= "/"/>}></Route>
    </Routes>
  )
}
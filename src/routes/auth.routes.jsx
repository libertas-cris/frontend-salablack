import { Routes, Route, Navigate, createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/signin";
import { SignUp } from "../pages/singup";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/cadastrar" element = {<SignUp />}/>
      <Route path="/" element = {<SignIn />}/>
      <Route path="*" element={<Navigate to= "/"/>}></Route>
    </Routes>
  )
}
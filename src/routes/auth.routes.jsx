import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "../pages/signin";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element = {<SignIn />}/>
      <Route path="*" element={<Navigate to= "/"/>}></Route>
    </Routes>
  )
}
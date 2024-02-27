import { Routes, Route } from "react-router-dom"; 
import { Admin } from "../pages/admin";

export function AdminRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Admin />}></Route>
    </Routes>

  )
}
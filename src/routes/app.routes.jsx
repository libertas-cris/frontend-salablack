import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import {Tasks} from "../pages/tasks";
export function AppRoutes(){

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tasks" element={<Tasks/>}></Route>
    </Routes>
  )
}
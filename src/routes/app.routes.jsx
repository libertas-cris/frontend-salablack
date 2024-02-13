import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import {Tasks} from "../pages/tasks";
import { UsePlatform } from "../pages/usePlatform/usePlatform";
export function AppRoutes(){

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tarefas" element={<Tasks/>}></Route>
      <Route path="/tutorial" element={<UsePlatform/>}></Route>
    </Routes>
  )
}
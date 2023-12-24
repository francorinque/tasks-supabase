import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import CreateTaskPage from "../pages/CreateTaskPage"
import TaskEditPage from "../pages/TaskEditPage"

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/task/:id" element={<TaskEditPage />} />
      <Route path="/create-task" element={<CreateTaskPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
export default MyRoutes

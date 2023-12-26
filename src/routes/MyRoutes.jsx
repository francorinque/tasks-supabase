import { Routes, Route } from "react-router-dom"
import { useTasks } from "../context/TasksContext"

import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import CreateTaskPage from "../pages/CreateTaskPage"
import TaskEditPage from "../pages/TaskEditPage"
import TasksList from "../components/TasksList"

const MyRoutes = () => {
  const { tasksData } = useTasks()

  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/all" element={<TasksList data={tasksData} />} />
        <Route
          path="/pending"
          element={<TasksList data={tasksData.filter((task) => !task.done)} />}
        />
        <Route
          path="/completed"
          element={<TasksList data={tasksData.filter((task) => task.done)} />}
        />
      </Route>
      <Route path="/task/:id" element={<TaskEditPage />} />
      <Route path="/create-task" element={<CreateTaskPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
export default MyRoutes

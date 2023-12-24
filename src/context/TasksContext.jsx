import { useContext, useState } from "react"
import { createContext } from "react"
import supabase from "../supabase/client"
import { useNavigate } from "react-router-dom"

export const TasksContext = createContext()

export const useTasks = () => {
  const data = useContext(TasksContext)
  if (!data) {
    console.error("useTasks must be used within a TasksProvider")
    return
  }
  return data
}

const TasksProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([])

  const getAllTasks = async (done = false) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      const { data: tasks } = await supabase
        .from("tasks")
        .select()
        .eq("userId", user.id)
        .eq("done", done)
        .order("created_at", { ascending: false })

      setAllTasks(tasks)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TasksContext.Provider value={{ allTasks, getAllTasks }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider

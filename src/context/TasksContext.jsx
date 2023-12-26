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
  const [tasksData, setAllTasks] = useState([])

  const getAllTasks = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      const { data: tasks } = await supabase
        .from("tasks")
        .select()
        .eq("userId", user.id)
        .order("created_at", { ascending: false })
      setAllTasks(tasks)
    } catch (error) {
      console.log(error)
    }
  }

  const addTask = async (newTask) => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    const { error } = await supabase
      .from("tasks")
      .insert({ name: newTask, userId: user.id })
    if (error) throw Error(error)
  }

  return (
    <TasksContext.Provider
      value={{ tasksData, setAllTasks, getAllTasks, addTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider

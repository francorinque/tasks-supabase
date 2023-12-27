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
  const [isLoading, setIsLoading] = useState(false)

  const getAllTasks = async () => {
    setIsLoading(true)
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
      setIsLoading(false)
    } finally {
      setIsLoading(false)
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

  const changeStatus = async (done, itemId) => {
    try {
      const { error } = await supabase
        .from("tasks")
        .update({ done })
        .eq("id", itemId)

      if (error) throw Error(error)

      setAllTasks((prev) =>
        prev.map((task) => (task.id === itemId ? { ...task, done } : task))
      )
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (itemId) => {
    try {
      const { error } = await supabase.from("tasks").delete().eq("id", itemId)
      if (error) throw Error(error)
      setAllTasks((prev) => prev.filter((task) => task.id !== itemId))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasksData,
        setAllTasks,
        getAllTasks,
        addTask,
        deleteTask,
        isLoading,
        changeStatus,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider

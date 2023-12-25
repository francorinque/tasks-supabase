import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import TaskForm from "../components/TaskForm"
import supabase from "../supabase/client"

const TaskEditPage = () => {
  const [task, setTask] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { id: taskId } = useParams()
  const navigate = useNavigate()

  const getTask = async (id) => {
    try {
      const { data, error } = await supabase.from("tasks").select().eq("id", id)
      if (error) throw Error(error)
      setTask(data[0].name)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditTask = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const { error } = await supabase
        .from("tasks")
        .update({ name: task })
        .eq("id", taskId)
      if (error) throw Error(error)
      navigate("/")
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTask(taskId)
  }, [])

  return (
    <section>
      <TaskForm
        type="Edit"
        onSubmit={handleEditTask}
        taskValue={task}
        isLoading={isLoading}
        onChange={(e) => setTask(e.target.value)}
      />
    </section>
  )
}
export default TaskEditPage

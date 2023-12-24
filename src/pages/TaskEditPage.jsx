import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import TaskForm from "../components/TaskForm"
import supabase from "../supabase/client"

const TaskEditPage = () => {
  const [task, setTask] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { id: taskId } = useParams()

  const getTask = async (id) => {
    try {
      const { data } = await supabase.from("tasks").select().eq("id", id)
      setTask(data[0].name)
    } catch (error) {
      console.log(error)
    }
  }
  const handleEditTask = async () => {}

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

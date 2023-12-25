import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTasks } from "../context/TasksContext"

import TaskForm from "../components/TaskForm"

const CreateTaskPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [task, setTask] = useState("")

  const { addTask } = useTasks()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await addTask(task)
      setTask("")
      navigate("/")
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section>
      <TaskForm
        type="Create"
        onSubmit={handleSubmit}
        isLoading={isLoading}
        taskValue={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </section>
  )
}
export default CreateTaskPage

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTasks } from "../context/TasksContext"

import TaskForm from "../components/TaskForm"

const CreateTaskPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState("")
  const [task, setTask] = useState("")

  const { addTask } = useTasks()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      if (!task.length) return alert("Task can't be empty")

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

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <section>
      <TaskForm
        type="Create"
        onSubmit={handleSubmit}
        isLoading={isLoading}
        taskValue={task}
        onChange={handleChange}
      />
    </section>
  )
}
export default CreateTaskPage

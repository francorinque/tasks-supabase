import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../supabase/client"
import TaskForm from "../components/TaskForm"

const CreateTaskPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [task, setTask] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e, task) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      const { error } = await supabase
        .from("tasks")
        .insert({ name: task, userId: user.id })
      if (error) throw Error(error)
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

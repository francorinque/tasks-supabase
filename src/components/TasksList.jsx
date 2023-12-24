import { useEffect } from "react"
import { useTasks } from "../context/TasksContext"
import { Link } from "react-router-dom"

const TasksList = () => {
  const { allTasks, getAllTasks } = useTasks()

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <div>
      {allTasks?.map((item) => (
        <div key={item.id}>
          <Link to={`/task/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  )
}
export default TasksList

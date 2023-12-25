import { useEffect } from "react"
import { useTasks } from "../context/TasksContext"

import TaskCard from "./TaskCard"

const TasksList = ({ done }) => {
  const { allTasks, getAllTasks } = useTasks()

  useEffect(() => {
    getAllTasks(done)
  }, [])

  return (
    <div className="w-full flex flex-wrap gap-5 items-center justify-start">
      {allTasks?.map((item) => (
        <TaskCard key={item.id} item={item} />
      ))}
    </div>
  )
}
export default TasksList

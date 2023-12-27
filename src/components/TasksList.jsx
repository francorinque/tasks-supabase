import { useTasks } from "../context/TasksContext"

import TaskCard from "./TaskCard"

const TasksList = ({ data }) => {
  const { isLoading } = useTasks()

  if (data?.length < 1) {
    return <h3 className="text-center text-2xl">No tasks</h3>
  } else if (isLoading) {
    return <h3 className="text-center text-2xl">Loading...</h3>
  }

  return (
    <div className="w-full mt-10 grid grid-cols-gridTasks  items-center justify-center gap-4 ">
      {data?.map((item) => (
        <TaskCard key={item.id} item={item} />
      ))}
    </div>
  )
}
export default TasksList

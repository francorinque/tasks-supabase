import TaskCard from "./TaskCard"

const TasksList = ({ data }) => {
  return (
    <div className="w-full flex flex-wrap gap-5 items-center justify-center">
      {!data?.length && <h3 className="text-center text-2xl">No tasks</h3>}
      {data?.map((item) => (
        <TaskCard key={item.id} item={item} />
      ))}
    </div>
  )
}
export default TasksList

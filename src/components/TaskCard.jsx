import {
  BeakerIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

import { useTasks } from "../context/TasksContext"
import { fixedDate } from "../utils"

const TaskCard = ({ item }) => {
  const { deleteTask, changeStatus } = useTasks()

  return (
    <>
      <div className="w-full overflow-hidden bg-neutral rounded-md  flex items-center justify-between gap-4 p-5 cursor-pointer ">
        {/* check icon */}
        <div
          className={`grid items-center cursor-pointer hover:scale-110 transition-transform justify-center  w-10 h-10 rounded-full  ${
            item.done ? "bg-green-500" : "bg-blue-400"
          }`}
          title={`${item.done ? "Mark as not done" : "Mark as done"}`}
        >
          {item.done ? (
            <CheckIcon
              className="w-5 h-5"
              onClick={() => changeStatus(false, item.id)}
            />
          ) : (
            <BeakerIcon
              className="w-5 h-5"
              onClick={() => changeStatus(true, item.id)}
            />
          )}
        </div>
        {/* task text */}
        <div className="flex-1 flex flex-col justify-center items-start gap-2">
          <p
            className={`${
              item.done ? "text-green-500" : "text-light"
            } text-1xl md:text-2xl leading-none font-bold whitespace-normal`}
          >
            {item.name}
            {/* {fixedName(item)} */}
          </p>
          <small className="text-xs md:text-1xl">{fixedDate(item)}</small>
        </div>

        {/* task options */}

        <div className="flex flex-col gap-3 justify-center items-center">
          <Link to={`/task/${item.id}`}>
            <PencilIcon className="w-4 h-4 cursor-pointer hover:scale-150 transition-transform" />
          </Link>
          <TrashIcon
            className="w-4 h-4 cursor-pointer hover:scale-150 transition-transform text-red-300"
            onClick={() => deleteTask(item.id)}
          />
        </div>
      </div>
      {/* modal
       */}
    </>
  )
}
export default TaskCard

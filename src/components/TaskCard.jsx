import supabase from "../supabase/client"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import {
  TrashIcon,
  PencilIcon,
  CheckIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid"

import ModalTask from "./ModalTask"
import { fixedDate, fixedName } from "../utils"
import { useTasks } from "../context/TasksContext"

const TaskCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { setAllTasks } = useTasks()

  const handleChangeDone = async (done) => {
    try {
      const { error } = await supabase
        .from("tasks")
        .update({ done })
        .eq("id", item.id)

      if (error) throw Error(error)

      setAllTasks((prev) =>
        prev.map((task) => (task.id === item.id ? { ...task, done } : task))
      )
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    try {
      const { error } = await supabase.from("tasks").delete().eq("id", item.id)
      if (error) throw Error(error)
      setAllTasks((prev) => prev.filter((task) => task.id !== item.id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className=" w-full max-w-[400px]  bg-neutral rounded-md  flex items-center justify-between gap-4 p-5">
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
              onClick={() => {
                handleChangeDone(false)
              }}
            />
          ) : (
            <BeakerIcon
              className="w-5 h-5"
              onClick={() => {
                handleChangeDone(true)
              }}
            />
          )}
        </div>
        {/* task text */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <p
            className={`${
              item.done ? "text-green-500" : "text-light"
            } text-2xl font-bold`}
          >
            {fixedName(item)}
          </p>
          <small>{fixedDate(item)}</small>
        </div>

        {/* task options */}

        <div className="flex flex-col gap-3 justify-center items-center">
          <Link to={`/task/${item.id}`}>
            <PencilIcon className="w-4 h-4 cursor-pointer hover:scale-150 transition-transform" />
          </Link>
          <TrashIcon
            className="w-4 h-4 cursor-pointer hover:scale-150 transition-transform text-red-300"
            onClick={handleDelete}
          />
        </div>
      </div>
      {/* modal
       */}

      <ModalTask
        item={item}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </>
  )
}
export default TaskCard

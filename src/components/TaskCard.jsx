import { Link } from "react-router-dom"
import { useState } from "react"
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid"

import ModalTask from "./ModalTask"

const TaskCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        key={item.id}
        className={`
        p-5  w-[300px]  min-w-[250px]  max-h-40 rounded-md shadow-md  text-start bg-neutral 
          card cursor-pointer ${item.done && "done"}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex justify-end w-full gap-4 text-sm">
          <Link to={`/task/${item.id}`}>
            <PencilIcon className="w-4 h-4 cursor-pointer hover:scale-150 transition-transform" />
          </Link>
          <TrashIcon className="w-4 h-4 cursor-pointer hover:scale-150 transition-transform text-red-300" />
        </div>

        <h4 className="font-semibold text-start text-2xl block  mb-2 my-5">
          {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </h4>
        <div>
          <p className="text-sm text-light/60">
            {item.created_at.split("T")[0]}
          </p>
        </div>
      </div>
      <ModalTask
        item={item}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </>
  )
}
export default TaskCard

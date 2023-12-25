import { XMarkIcon } from "@heroicons/react/24/solid"

const ModalTask = ({ item, isOpen, closeModal }) => {
  return (
    <div
      className={`
      ${isOpen ? "flex" : "hidden"}
      w-full  fixed inset-0  bg-black/40  backdrop-blur-sm z-[999] items-center justify-center`}
    >
      <div className="w-[90%] flex flex-col  max-w-[500px] bg-neutral rounded-md shados-md p-5 mx-auto h-[300px]">
        <div className="w-full flex justify-end mb-4" onClick={closeModal}>
          {
            <XMarkIcon className="w-4 h-4 cursor-pointer hover:scale-150 transition-transform" />
          }
        </div>

        <div className="flex-1 flex items-center justify-center flex-col gap-2">
          <h4 className="text-3xl font-semibold text-center">{item.name}</h4>
          <p className="text-1xl text-light/70">Description...</p>
        </div>

        <div className="flex justify-end">
          <span className="font-semibold">
            {" "}
            {item.done ? "Done" : "Not done"}
          </span>
        </div>
      </div>
    </div>
  )
}
export default ModalTask

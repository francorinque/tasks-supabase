import { useNavigate } from "react-router-dom"

const TaskForm = ({ type, onSubmit, isLoading, taskValue, onChange }) => {
  const navigate = useNavigate()

  return (
    <div className="wrapper_form glassmorphism">
      <h2 className="form_head">{type} Task</h2>
      <form onSubmit={(e) => onSubmit(e, task)}>
        <input
          type="text"
          placeholder="Title..."
          value={taskValue}
          onChange={onChange}
          className="input"
        />
        <div className="flex items-center justify-start gap-4">
          {" "}
          <button
            className="outline_btn"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button className="black_btn" type="submit">
            {isLoading ? `${type}...` : type}
          </button>
        </div>
      </form>
    </div>
  )
}
export default TaskForm

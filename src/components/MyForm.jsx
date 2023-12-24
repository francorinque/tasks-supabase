import { Link } from "react-router-dom"

const MyForm = ({
  type,
  handleSubmit,
  handleEmail,
  handlePassword,
  isLoading,
  email,
  password,
  disabled,
  msg,
}) => {
  return (
    <div className="wrapper_form glassmorphism ">
      <h2 className="form_head">{type}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="example@gmail.com"
          value={email}
          onChange={handleEmail}
          className="input"
        />
        <input
          type="password"
          placeholder="Password123"
          value={password}
          onChange={handlePassword}
          className="input"
        />
        {msg && <p className="text-red-500">{msg}</p>}
        <button
          type="submit"
          disabled={disabled}
          className="black_btn my-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? `${type}...` : type}
        </button>
      </form>

      <span>
        {type === "Login"
          ? "Don't have an account?"
          : "Already have an account?"}
        <Link
          to={type === "Login" ? "/register" : "/login"}
          className="text-blue-500 ml-2"
        >
          {type === "Login" ? "Register" : "Login"}
        </Link>
      </span>
    </div>
  )
}
export default MyForm

import { useState } from "react"
import supabase from "../supabase/client"
import MyForm from "../components/MyForm"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setIsSubmiting(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "https://tasks-app-green.vercel.app/login",
          // emailRedirectTo: "http//localhost:5173/login",
        },
      })
      if (error) throw Error(error)
      navigate("/login")
    } catch (error) {
      console.log(error)
      setError(error)
      setIsSubmiting(false)
    } finally {
      setIsSubmiting(false)
    }
  }

  return (
    <section className="padding-t">
      <MyForm
        type="Register"
        handleSubmit={handleRegister}
        handleEmail={(e) => setEmail(e.target.value)}
        handlePassword={(e) => setPassword(e.target.value)}
        isLoading={isSubmiting}
        disabled={email.length && password.length ? false : true}
        msg={error?.message.split(":")[1]}
        email={email}
        password={password}
      />
    </section>
  )
}
export default RegisterPage

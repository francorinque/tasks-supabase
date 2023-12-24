import { useState } from "react"
import { useNavigate } from "react-router-dom"
import MyForm from "../components/MyForm"
import supabase from "../supabase/client"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsSubmiting(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw Error(error)
    } catch (error) {
      console.log(error)
      setError(error)
      setIsSubmiting(false)
    } finally {
      setIsSubmiting(false)
    }
  }

  return (
    <section>
      <MyForm
        type="Login"
        handleSubmit={handleLogin}
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
export default LoginPage

import React, { useState } from "react"
import { useAuth } from "../providers/AuthProviders"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [userIdInput, setUserIdInput] = useState("")
  const [PasswordIdInput, setPasswordIdInput] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(userIdInput, PasswordIdInput)
      alert("Login Success !!!")

      navigate("/profile")
    } catch (err) {
      console.log(err)
      alert("Wrong Password !!!")
    }
  }

  return (
    <div className="flex justify-center w-3/5 m-auto mt-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center drop-shadow-md border w-96 py-5 ">
        <div>Login</div>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUserIdInput(e.target.value)
          }}
          className="border-2"
          required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordIdInput(e.target.value)
          }}
          className="border-2"
          required
        />
        <input
          type="submit"
          value="Login"
          className="border-2 cursor-pointer p-2 hover:bg-neutral-800 hover:text-yellow-400"
        />
      </form>
    </div>
  )
}
export default Login

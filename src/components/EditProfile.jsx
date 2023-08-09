import React from "react"
import useUser from "../hooks/useUser"
import { updateNamePath } from "../constant"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const EditProfile = () => {
  const [newName, setNewName] = useState("")
  const navigate = useNavigate()
  const handlerSubmit = async (e) => {
    e.preventDefault()
    if (!newName) {
      return alert("Please fill your new name")
    }
    try {
      const token = localStorage.getItem("token")
      const respon = await fetch(updateNamePath, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: newName,
        }),
      })
      if (respon.status === 200) {
        alert("Your name has Change !")
        return navigate("/profile")
      }
      return alert("can't change your name")
    } catch (err) {
      console.error(err)
      alert("Can't Update your name")
    }
  }

  const { showUser } = useUser()
  return (
    <>
      <div className="w-1/2 m-auto border mt-20 flex flex-col">
        <form onSubmit={handlerSubmit} className="flex flex-col justify-center items-center p-5 gap-2">
          <label>Change Name {showUser.name}</label>
          <input
            type="text"
            className="border p-1"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="new name"
          />
          <input type="submit" value="submit" className="border rounded cursor-pointer p-1 hover:bg-yellow-300" />
        </form>
      </div>
    </>
  )
}
export default EditProfile

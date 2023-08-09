import React from "react"
import useUser from "../hooks/useUser"
import { Link } from "react-router-dom"

const Profile = () => {
  const { showUser } = useUser()

  return (
    <div>
      <div className="w-1/2 m-auto border mt-20 flex flex-col">
        <div className="flex flex-col w-auto justify-center text-center gap-5 py-10">
          <p className="text-5xl">wellcome {showUser.name} !!!</p>
          <div className="flex flex-col text-start w-1/2 m-auto gap-3">
            <p>User id : {showUser.id}</p>
            <p>Username : {showUser.username}</p>
            <p>RegisTime : {showUser.registeredAt}</p>
          </div>
        </div>
        <div className="flex justify-center m-2">
          <Link to="/editprofile">
            <button className="border rounded p-2 hover:bg-yellow-300">change name</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile

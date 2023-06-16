/* eslint-disable no-undef */
import React from "react"
import useUser from "../hooks/useUser"

const Profile = () => {
  const { showUser } = useUser()

  return (
    <div>
      <div className="w-1/2 m-auto">
        <div className="flex flex-col w-auto justify-center text-center gap-5 mt-20 border py-10">
          <p className="text-5xl">wellcome {showUser.name} !!!</p>
          <div className="flex flex-col text-start w-1/2 m-auto gap-3">
            <p>User id : {showUser.id}</p>
            <p>Username : {showUser.name}</p>
            <p>RegisTime : {showUser.registeredAt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

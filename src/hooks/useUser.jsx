import { useEffect, useState } from "react"

const useUser = () => {
  const [showUser, setShowUser] = useState("")
  const token = localStorage.getItem("token")
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch("https://api.learnhub.thanayut.in.th/user/rukchanok")
        const res = await fetch("https://api.learnhub.thanayut.in.th/auth/me", {
          method: "GET",
          headers: {
            accept: "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        })

        const data = await res.json()
        setShowUser(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return {
    showUser,
  }
}

export default useUser

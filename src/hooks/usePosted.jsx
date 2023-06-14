import { useState } from "react"

const usePosted = (id) => {
  const [post, setPost] = useState(null)

  const fetchData = async () => {
    try {
      const res = await fetch(`https://api.learnhub.thanayut.in.th/content/${id}`)
      const data = await res.json()
      setPost(data)
    } catch (err) {
      console.log(err)
    }
  }
  fetchData()

  return {
    post,
  }
}

export default usePosted

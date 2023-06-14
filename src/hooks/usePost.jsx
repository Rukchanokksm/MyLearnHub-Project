import { useEffect, useState } from "react"

const usePost = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.learnhub.thanayut.in.th/content")
        const data = await res.json()
        setPosts(data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return {
    posts,
  }
}

export default usePost

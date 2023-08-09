import { useEffect, useState } from "react"
import { contentPath } from "../constant"

const usePost = () => {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(contentPath)
        const data = await res.json()
        setPosts(data.data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return {
    posts,
    isLoading,
  }
}

export default usePost

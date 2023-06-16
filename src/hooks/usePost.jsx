import { useEffect, useState } from "react"

const usePost = () => {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch("https://api.learnhub.thanayut.in.th/content")
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

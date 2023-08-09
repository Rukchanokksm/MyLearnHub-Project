import { useEffect, useState } from "react"

const usePosted = (id) => {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:8000/content/${id}`)
        const data = await res.json()
        setPost(data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return {
    post,
    isLoading,
  }
}

export default usePosted

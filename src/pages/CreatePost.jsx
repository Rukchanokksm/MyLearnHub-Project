/* eslint-disable react/jsx-key */
import React, { useState } from "react"
import { FaStar } from "react-icons/fa"

const CreatePost = () => {
  const [newUrl, setNewUrl] = useState("")
  const [newComment, setNewComment] = useState("")
  const token = localStorage.getItem("token")

  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const inputData = await fetch("https://api.learnhub.thanayut.in.th/content", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          videoUrl: newUrl,
          comment: newComment,
          rating: rating,
        }),
      })
      // const data = await inputData.json()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex justify-center w-3/5 m-auto mt-20">
      <form onSubmit={handlesubmit} className="flex flex-col gap-2 w-96 py-10 px-5 drop-shadow-md border">
        <label>URL :</label>
        <input
          type="url"
          value={newUrl}
          onChange={(e) => {
            setNewUrl(e.target.value)
          }}
          className="border-2"
          required
        />
        <label>Comment :</label>
        <input
          type="text"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value)
          }}
          className="border-2 h-20"
          required
        />
        {/* <label>Rating</label>
        <input
          type="number"
          value={newRating}
          min="0"
          max="5"
          onChange={(e) => {
            setNewRating(e.target.value)
          }}
          className="border-2 w-10"
        /> */}
        <div className="flex">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  className="hidden"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                />

                <FaStar
                  size={30}
                  className="cursor-pointer"
                  color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            )
          })}
        </div>
        <input type="submit" value="Post" className="border-2 cursor-pointer hover:bg-red-400" />
      </form>
    </div>
  )
}

export default CreatePost

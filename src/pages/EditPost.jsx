import React, { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import Backimg from "../img/back.png"

const EditPost = () => {
  const [newEditComment, setNewEditComment] = useState("")
  const { id } = useParams()
  const token = localStorage.getItem("token")

  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const handleEdit = async (e) => {
    e.preventDefault()

    try {
      await fetch(`https://api.learnhub.thanayut.in.th/content/${id}`, {
        method: "PATCH",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          comment: newEditComment,
          rating: rating,
        }),
      })
    } catch (err) {
      console.log(err)
    }
  }

  //   const handlePopup = () => {
  //     return (
  //       <div className="z-10">
  //         <div>
  //           <p>Hello</p>
  //         </div>
  //       </div>
  //     )
  //   }
  return (
    <div className="w-1/2 m-auto p-5 mt-20 border rounded-md drop-shadow-sm ">
      <div>
        <p className="text-4xl">EDIT POST</p>
      </div>
      <form onSubmit={handleEdit} className="flex flex-col gap-5 p-3">
        <label>Edit comment :</label>
        <input
          type="text"
          value={newEditComment}
          onChange={(e) => {
            setNewEditComment(e.target.value)
          }}
          className="border-2"
        />
        <div className="flex">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1
            return (
              <>
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
              </>
            )
          })}
        </div>
        <input
          type="submit"
          value="edit"
          className="p-3 border rounded-md w-20 cursor-pointer  hover:bg-orange-200 self-center"
        />
      </form>
      <NavLink to={`/post/${id}`} className="inline-flex gap-1 items-start p-2 border rounded-md hover:bg-orange-200">
        <img src={Backimg} alt="back" className="h-3 self-center" />
        back to post
      </NavLink>
    </div>
  )
}

export default EditPost

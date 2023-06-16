import React, { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import Backimg from "../img/back.png"
import usePost from "../hooks/usePosted"
import ReactLoading from "react-loading"
import Comma from "../img/inverted-commas.png"

const EditPost = () => {
  const [newEditComment, setNewEditComment] = useState("")
  const { id } = useParams()
  const token = localStorage.getItem("token")
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const { post, isLoading } = usePost(id)

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
      alert("Edit Done !!!")
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
  if (isLoading)
    return (
      <>
        <div className="flex justify-center sticky top-0 w-1/2 mt-32 m-auto">
          <ReactLoading type="spokes" color="rgb(253 224 71)" height={100} width={100} />
        </div>
      </>
    )

  return (
    <div className="flex flex-col w-1/2 m-auto p-5 mt-20 border rounded-md drop-shadow-sm ">
      {post && (
        <div className="flex flex-col gap-3 my-5 py-4 border-b-2">
          <div className="flex gap-5">
            <img className="float-right h-5" src={Comma} alt="Comma" />
            <p className="text-3xl font-medium">{post.comment}</p>
          </div>
          <div className="flex flex-row w-5  ">
            {Array.from(Array(post.rating)).map((e, i) => (
              <div key={i} className="text-yellow-400">
                <FaStar size={20} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="text-4xl">EDIT POST</p>
      </div>
      <form onSubmit={handleEdit} className="flex flex-col gap-5 p-3">
        <label>New comment :</label>
        <input
          type="text"
          value={newEditComment}
          onChange={(e) => {
            setNewEditComment(e.target.value)
          }}
          className="border-2"
        />
        <p>Set new rating</p>
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
      <div>
        <NavLink to={`/post/${id}`} className="inline-flex gap-1 items-start p-2 border rounded-md hover:bg-orange-200">
          <img src={Backimg} alt="back" className="h-3 self-center" />
          back to post
        </NavLink>
      </div>
    </div>
  )
}

export default EditPost

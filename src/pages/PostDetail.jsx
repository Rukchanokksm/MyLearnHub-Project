import React from "react"
import usePost from "../hooks/usePosted"
import { NavLink, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { FaStar } from "react-icons/fa"
import Comma from "../img/inverted-commas.png"

const userId = localStorage.getItem("user")
const PostDetail = () => {
  const { id } = useParams()
  const { post } = usePost(id)
  return (
    <div className="w-1/2 m-auto mt-20">
      {post && (
        <>
          <div className="flex flex-col gap-5 justify-center px-10 py-5 mb-10 bg-orange-200 border rounded-lg">
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="text-2xl font-bold">{post.videoTitle}</p>
              <p className="text-xl font-bold">{post.creatorUrl}</p>
            </div>
            <div className="w-auto">
              <ReactPlayer width="100%" url={post.videoUrl} />
            </div>
            <div className="flex flex-col bg-zinc-200 p-5 gap-16 border rounded-lg">
              <div className="flex gap-5">
                <img className="float-right h-5" src={Comma} alt="Comma" />
                <p className="text-3xl font-medium">{post.comment}</p>
              </div>
              <div className="flex flex-col text-right">
                <p>Post By {post.postedBy.name}</p>
                <div className="flex flex-row-reverse w-5 self-end ">
                  {Array.from(Array(post.rating)).map((e, i) => (
                    <div key={i} className="text-orange-500">
                      <FaStar size={20} />
                    </div>
                  ))}
                </div>
              </div>
              {post.postedBy.username === userId ? (
                <>
                  <NavLink to={`/editpost/${id}`}>
                    <button className="border rounded-lg m-3 p-2 bg-stone-400 hover:bg-stone-300">Edit</button>
                  </NavLink>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PostDetail

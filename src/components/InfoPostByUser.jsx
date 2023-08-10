import React from "react"
import usePost from "../hooks/usePosted"
import { NavLink, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { FaStar } from "react-icons/fa"
import Comma from "../img/inverted-commas.png"
import ReactLoading from "react-loading"
import deleteContent from "../hooks/DeleteContent"

const userId = localStorage.getItem("user")
const PostDetail = () => {
  const { id } = useParams()
  const { post, isLoading } = usePost(id)

  if (isLoading)
    return (
      <>
        <div className="flex justify-center sticky top-0 w-1/2 mt-32 m-auto">
          <ReactLoading type="spokes" color="rgb(253 224 71)" height={100} width={100} />
        </div>
      </>
    )
  return (
    <div className="w-1/2 m-auto mt-20">
      {post && (
        <>
          <div className="flex flex-col gap-5 justify-center px-10 py-5 mb-10 border rounded-lg">
            <div className="flex flex-col gap-3 justify-center items-center ">
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
                    <div key={i} className="text-yellow-400">
                      <FaStar size={20} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex">
                {post.postedBy.username === userId ? (
                  <>
                    <NavLink to={`/editpost/${id}`}>
                      <button className="border rounded text-xs m-3 p-1 bg-neutral-800 text-white hover:bg-yellow-300 hover:text-black">
                        Edit
                      </button>
                    </NavLink>
                    <NavLink to="/">
                      <button
                        className="border rounded m-3 p-1 text-xs bg-neutral-800 text-white hover:bg-yellow-300 hover:text-black"
                        onClick={() => deleteContent(id)}
                      >
                        delete
                      </button>
                    </NavLink>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PostDetail

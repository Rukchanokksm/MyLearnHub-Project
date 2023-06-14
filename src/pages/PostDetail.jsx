import React from "react"
import usePost from "../hooks/usePosted"
import { useParams } from "react-router-dom"
import StarImg from "../img/star.png"
import ReactPlayer from "react-player"

const PostDetail = () => {
  const { id } = useParams()
  const { post } = usePost(id)

  return (
    <div className="w-1/2 m-auto mt-5">
      {post && (
        <>
          <div className="flex flex-col gap-5 justify-center px-10 py-5 bg-orange-200">
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="text-2xl font-bold">{post.videoTitle}</p>
              <p className="text-xl font-bold">{post.creatorUrl}</p>
            </div>
            <div className="w-auto">
              <ReactPlayer width="100%" url={post.videoUrl} />
            </div>
            <div className="flex flex-col bg-zinc-200 p-5">
              <p>{post.comment}</p>
              <div className="flex flex-col items-end">
                <div className="flex w-5">
                  <img src={StarImg} alt="RatingImg" />
                </div>
                <p>{post.videoUrl}</p>
                <p>Date</p>
              </div>
            </div>
          </div>
        </>
      )}

      <div></div>
      <div></div>
    </div>
  )
}

export default PostDetail

import React from "react"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const GetPost = (props) => {
  const { post } = props

  const dateTime = post.updatedAt
  const upDate = dateTime.split("T")[0]

  return (
    <>
      <Link to={`/post/${post.id}`}>
        <div className="flex flex-col justify-between gap-2 my-5 mx-1 border rounded-lg overflow-hidden h-96 drop-shadow-lg">
          <div>
            <img
              src={post.thumbnailUrl}
              alt="test"
              className="w-full hover:skew-y-6 ease-in duration-300
"
            />
            <p className="p-2 text-sm font-medium Truncate">{post.videoTitle}</p>
          </div>
          <div className="flex flex-col gap-1 justify-end items-end  px-4 py-2 bg-zinc-300">
            <p className="text-sm font-medium self-end text-right hover:scale-x-105">
              post by <span className="font-extralight">{post.postedBy.name}</span>
            </p>
            <div className="flex flex-row-reverse w-5 hover:scale-x-105">
              {Array.from(Array(post.rating)).map((e, i) => (
                <div key={i} className="text-orange-500">
                  <FaStar size={15} />
                </div>
              ))}
            </div>
            <p className="text-sm text-right hover:scale-x-105">update {upDate}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default GetPost

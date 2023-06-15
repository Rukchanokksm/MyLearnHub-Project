import React from "react"
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const GetPost = (props) => {
  const { post } = props

  const dateTime = post.updatedAt
  const upDate = dateTime.split("T")[0]

  return (
    <div className="my-5 mx-1 border rounded-xl overflow-hidden h-96 drop-shadow-lg">
      <Link to={`/post/${post.id}`}>
        <img
          src={post.thumbnailUrl}
          alt="test"
          className="w-full hover:skew-y-6 ease-in duration-300

"
        />
        <div className="flex flex-col p-5 gap-3">
          <p>{post.videoTitle}</p>
          <p className="text-sm font-medium self-end">
            post by <span className="font-extralight">{post.postedBy.name}</span>
          </p>
          <div className="flex flex-row-reverse w-5 self-end ">
            {Array.from(Array(post.rating)).map((e, i) => (
              <div key={i} className="text-orange-500">
                <FaStar size={15} />
              </div>
            ))}
          </div>
          <p className="text-sm">update {upDate}</p>
        </div>
      </Link>
    </div>
  )
}

export default GetPost

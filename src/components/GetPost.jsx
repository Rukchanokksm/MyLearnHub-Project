import React from "react"
// import Testimg from "../img/Test-imaga.jpg"
import { Link } from "react-router-dom"

const GetPost = (props) => {
  const { post } = props
  return (
    <div className="flex flex-col xl:w-64 md:w-72 my-5 border">
      {/* <iframe src={post.videoUrl} title="Test"></iframe> */}
      <div>
        <img src={post.thumbnailUrl} alt="test" />
      </div>
      <Link to={`/post/${post.id}`}>
        <div className="p-5">
          <p>{post.videoTitle}</p>
        </div>
      </Link>
    </div>
  )
}

export default GetPost

/* eslint-disable react/jsx-no-undef */
import React from "react"
import usePost from "../hooks/usePost"
import GetPost from "../components/GetPost"
import { NavLink } from "react-router-dom"
import { useAuth } from "../providers/AuthProviders"
import ReactLoading from "react-loading"

const Home = () => {
  const { posts, isLoading } = usePost()
  const { isLogin } = useAuth()

  if (isLoading)
    return (
      <>
        <div className="flex justify-center sticky top-0 w-1/2 mt-32 m-auto">
          <ReactLoading type="spokes" color="rgb(253 224 71)" height={100} width={100} />
        </div>
      </>
    )
  return (
    <div className="flex flex-col">
      <div className="flex bg-neutral-800 h-56">
        <div className="flex flex-col w-2/3 m-auto gap-3">
          <p className="text-7xl font-bold text-yellow-400">LearnHub</p>
          <p className="text-xl font-medium text-slate-300">Hub for Educational Videos</p>
        </div>
      </div>
      <section className="w-3/4 m-auto mt-10 inline-flex flex-col">
        {isLogin && (
          <div className="my-10 flex justify-center">
            <NavLink
              to="/createpost"
              className="border rounded-md p-2  hover:bg-neutral-800 transition ease-in-out delay-150 bg-gradient-to-br from-yellow-200 to-yellow-500 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Create new content
            </NavLink>
          </div>
        )}
        <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
          {posts &&
            posts.map((post) => {
              return <GetPost key={posts.id} post={post} />
            })}
        </div>
      </section>
    </div>
  )
}

export default Home

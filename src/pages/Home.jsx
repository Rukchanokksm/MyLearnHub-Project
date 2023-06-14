/* eslint-disable react/jsx-no-undef */
import React from "react"
import usePost from "../hooks/usePost"
import GetPost from "../components/GetPost"
import { NavLink } from "react-router-dom"
import { useAuth } from "../providers/AuthProviders"

const Home = () => {
  const { posts } = usePost()
  const { isLogin } = useAuth()
  return (
    <div className="flex flex-col">
      <div className="flex bg-orange-200 h-60">
        <div className="flex flex-col w-2/3 m-auto gap-3">
          <p className="text-7xl font-bold text-orange-500">LearnHub</p>
          <p className="text-2xl font-medium text-slate-600">Hub for Educational Videos</p>
        </div>
      </div>
      <section className="w-3/4 m-auto">
        {isLogin && (
          <div className="my-10">
            <NavLink to="/createpost">Create new content</NavLink>
          </div>
        )}

        <div className="flex flex-wrap justify-start mt-10 gap-8">
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

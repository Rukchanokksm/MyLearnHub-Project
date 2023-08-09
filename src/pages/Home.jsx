import React, { useEffect, useState } from "react"
import usePost from "../hooks/usePost"
import GetPost from "../components/GetPost"
import { NavLink } from "react-router-dom"
import { useAuth } from "../providers/AuthProviders"
import ReactLoading from "react-loading"
import ReactPaginate from "react-paginate"
import FilterItems from "../components/FilterItems"
import useUser from "../hooks/useUser"
import FiltermyPost from "../components/FiltermyPost"

const Home = () => {
  const { posts, isLoading } = usePost()
  const { isLogin } = useAuth()
  const { showUser } = useUser()

  const [onFilter, setOnFilter] = useState(false)
  const [toTalPosts, setTotalPosts] = useState(posts)
  useEffect(() => {
    setTotalPosts(posts)
  }, [posts])

  const handleMyFilter = (e) => {
    e.preventDefault()
    const filtered = posts.filter((dataPoost) => {
      return dataPoost.postedBy.name === showUser.name
    })
    setOnFilter(!onFilter)
    onFilter ? setTotalPosts(filtered) : setTotalPosts(posts)
  }
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState([])
  const itemsPerPage = 8
  const pageCount = Math.ceil(toTalPosts && toTalPosts.length / itemsPerPage)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(toTalPosts && toTalPosts.slice(itemOffset, endOffset))
  }, [itemOffset, itemsPerPage, toTalPosts && toTalPosts])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % (toTalPosts && toTalPosts.length)

    setItemOffset(newOffset)
  }
  if (isLoading || !posts)
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
          <div className="my-10 flex justify-between items-center gap-5">
            <FilterItems />
            <FiltermyPost />
            <div>
              <button onClick={handleMyFilter} className={onFilter ? "p-2 bg-yellow-300" : "p-2 bg-slate-700"}>
                Test Filter
              </button>
            </div>
            <NavLink
              to="/createpost"
              className="border rounded-md p-2  hover:bg-neutral-800 transition ease-in-out delay-150 bg-gradient-to-br from-yellow-200 to-yellow-500 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Create new content
            </NavLink>
          </div>
        )}
        <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
          {currentItems &&
            currentItems.map((post) => {
              return <GetPost key={posts.id} post={post} />
            })}
        </div>
      </section>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex w-1/2 m-auto my-20 justify-between items-center"
        pageClassName="border p-2 rounded-lg"
        activeClassName="bg-yellow-400"
      />
    </div>
  )
}

export default Home

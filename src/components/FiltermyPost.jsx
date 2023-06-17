import React, { useState } from "react"

const FiltermyPost = () => {
  const [clickBtn, setClickBtn] = useState(false)
  const handleclick = () => {
    setClickBtn(!clickBtn)
    alert(clickBtn)
  }

  return (
    <>
      <div>
        <button onClick={handleclick}>
          <p>My post</p>
        </button>
      </div>
    </>
  )
}

export default FiltermyPost

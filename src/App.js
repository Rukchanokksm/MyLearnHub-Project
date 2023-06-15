/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import PostDetail from "./pages/PostDetail"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import EditPost from "./pages/EditPost"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Editpost/:id" element={<EditPost />} />
      </Routes>
    </div>
  )
}

export default App

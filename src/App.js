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
import { useAuth } from "./providers/AuthProviders"
import GuardedRoute from "./guards/GuardedRoute"
import EditProfile from "./components/EditProfile"

function App() {
  const { isLogin } = useAuth()
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GuardedRoute isRouteAccessible={isLogin} redirectRoute="/" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/Editpost/:id" element={<EditPost />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route element={<GuardedRoute isRouteAccessible={!isLogin} redirectRoute="/" />}>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

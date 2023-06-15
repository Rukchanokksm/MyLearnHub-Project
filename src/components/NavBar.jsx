/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from "react-router-dom"
import LogoNav from "../img/LogoNav.png"
import { useAuth } from "../providers/AuthProviders"

const NavBar = () => {
  const { isLogin, logout } = useAuth()
  return (
    <div className="bg-orange-200">
      <div className="flex justify-between w-4/5 m-auto py-5 items-center">
        <div className="flex gap-5 justify-center items-center text-orange-500">
          <img src={LogoNav} alt="logo" className="w-auto p-2 " />
          <NavLink to="/" className="text-red-500">
            LearnHub
          </NavLink>
        </div>

        {isLogin ? (
          <>
            <div className="flex gap-5">
              <NavLink to="/">
                <button onClick={logout}>Log out</button>
              </NavLink>
              <NavLink to="/profile" className="text-red-500">
                Profile
              </NavLink>
            </div>
          </>
        ) : (
          <div className="flex text-orange-500 gap-5">
            <NavLink to="/login" className="text-red-500">
              Log in
            </NavLink>
            <NavLink to="/register">
              <button onClick={logout}>Register</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar

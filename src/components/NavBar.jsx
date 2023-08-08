/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from "react-router-dom";
import LogoNav from "../img/graduate-cap.png";
import { useAuth } from "../providers/AuthProviders";
import useUser from "../hooks/useUser";

const NavBar = () => {
    const { isLogin, logout } = useAuth();
    const { showUser } = useUser();
    return (
        <div className="bg-neutral-800">
            <div className="flex justify-between w-4/5 m-auto py-5 items-center">
                <div className="flex gap-5 justify-center items-center ">
                    <img src={LogoNav} alt="logo" className="w-auto p-2 " />
                    <NavLink to="/" className="text-yellow-400 text-lg">
                        LearnHub
                    </NavLink>
                </div>

                {isLogin ? (
                    <>
                        <div className="flex gap-5 text-lg">
                            <p className="p-1 text-yellow-400">
                                Wellcome, {showUser.name}
                            </p>
                            <NavLink to="/">
                                <button
                                    onClick={logout}
                                    className="text-yellow-400 p-1 rounded-md border border-neutral-800 hover:border-yellow-400 "
                                >
                                    Log out
                                </button>
                            </NavLink>
                            <NavLink
                                to="/profile"
                                className="text-yellow-400 p-1 rounded-md border border-neutral-800 hover:border-yellow-400"
                            >
                                Profile
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <div className="flex text-yellow-400 gap-5 text-lg">
                        <NavLink
                            to="/login"
                            className="p-1 rounded-md border border-neutral-800 hover:border-yellow-400"
                        >
                            Log in
                        </NavLink>
                        <NavLink to="/register">
                            <button
                                onClick={logout}
                                className="p-1 rounded-md border border-neutral-800 hover:border-yellow-400"
                            >
                                Register
                            </button>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;

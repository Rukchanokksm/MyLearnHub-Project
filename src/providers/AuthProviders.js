/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from "react";
import { loginPath } from "../constant/index.js";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const AuthProviders = (props) => {
    const { children } = props;
    const [isLogin, setIsLoggIn] = useState(!!token);
    const [username, setUsername] = useState(user);

    const login = async (username, password) => {
        const loggininfo = { username, password };
        if(!username || !password){
            return alert('Please fill username or password')
        }
        try {
            const res = await fetch(
                loginPath,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(loggininfo),
                },
            );
            const data = await res.json();
            if (data.statusCode === 401) {
                throw new Error(data.message);
            }
            if (data.statusCode === 402) {
                throw new Error(data.message)
            }
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("user", username);
            setIsLoggIn(true);
            setUsername(username);
        } catch (err) {
            throw new Error(err.message);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggIn(false);
        setUsername(null);
    };
    return (
        <AuthContext.Provider value={{ isLogin, login, logout, username }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProviders;

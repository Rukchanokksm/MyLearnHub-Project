/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { regisPath } from "../constant";

const Register = () => {
    const [newUser, setNewUser] = useState("");
    const [newName, setNewName] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(
                // "https://api.learnhub.thanayut.in.th/user",
                regisPath,
                {
                    method: "POST",
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: newUser,
                        name: newName,
                        password: newPassword,
                    }),
                },
            );
            alert("Register Done !!!");
        } catch (err) {
            console.log(err);
            alert("Somting Wrong !!!");
        }
    };

    return (
        <div className="flex flex-col w-1/2 m-auto mt-20">
            <div>
                <form
                    onSubmit={handlesubmit}
                    className="flex flex-col w-1/2 m-auto gap-5"
                >
                    <label>Username :</label>
                    <input
                        type="text"
                        value={newUser}
                        onChange={(e) => {
                            setNewUser(e.target.value);
                        }}
                        className="border"
                    />
                    <label>Name :</label>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => {
                            setNewName(e.target.value);
                        }}
                        className="border"
                    />
                    <label>Password :</label>
                    <input
                        type="text"
                        value={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                        }}
                        className="border"
                    />

                    <input
                        type="submit"
                        value="Register"
                        className="border cursor-pointer w-1/2"
                    />
                </form>
            </div>
        </div>
    );
};

export default Register;

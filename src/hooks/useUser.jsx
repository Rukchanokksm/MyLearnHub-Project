/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { getUserPath } from "../constant";

const useUser = () => {
    const [showUser, setShowUser] = useState("");
    const token = localStorage.getItem("token");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(getUserPath, {
                    method: "GET",
                    headers: {
                        accept: "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await res.json();
                setShowUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    return {
        showUser,
    };
};

export default useUser;

import React, { useState, useEffect } from "react";
import { IoOptions } from "react-icons/io5"
import ProfileBadge from "../Components/profileBadge"
import profile1 from "../images/david-laid.jpg"
import axios from "axios";


const FindFriendsView = () => {

    const [users, setUsers] = useState([]);

    function shuffleUsers(x, y) {
        return Math.random() - 0.5;
    }


    useEffect(() => {
        axios.get("http://localhost:3004/user").then((resp) => {
            resp.data.sort(shuffleUsers);
            console.log(resp.data)
            setUsers(resp.data.slice(0,3));
        })
    }, [])

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <h2 style={{ margin: "40px 0 0 20px" }}> Discover</h2>
                <IoOptions style={{ margin: "45px 20px 0 0" }} size={30} />
                {/* <h1> Discover</h1>
                <IoOptions size={30}/> */}
            </div>

            <div className="profiles-container">

                {users.map((user, i) => {
                    return (
                        <ProfileBadge
                            className="profile-item"
                            key={i}
                            index={i}
                            thumbnail={require(`../images/${user.id}.jpg`)}
                            name={user.firstName}
                            age={user.age}
                            tags={[user.faculty, user.level]}
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default FindFriendsView
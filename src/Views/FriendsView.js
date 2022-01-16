import React, { useState, useEffect } from "react"
import { IoOptions } from "react-icons/io5"
import axios from "axios"
import FriendsBadge from "../Components/friendsBadge"
import profile1 from "../images/david-laid.jpg"
import "../styles/friendsview.css";

const FriendsView = () => {
    const [friendsList, setFriendsList] = useState([])

    const getUserFriends = () => {
        axios("http://localhost:3004/user/1")
            .then((response) => setFriendsList(response.data.friends))
            .catch((error) => console.error(error))
    }  

    useEffect(() => {
        getUserFriends()
    }, [])

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                }}
            >
                <h2 style={{ margin: "40px 0 0 20px" }}> Friends</h2>
                {/* <h1> Discover</h1>
                    <IoOptions size={30}/> */}
            </div>

            <div className="friend-container">
                {friendsList.map((friend, i) => {
                    return (
                        <FriendsBadge
                            className="friend-item"
                            key={i}
                            index={i}
                            thumbnail={require(`../images/${friend.id}.jpg`)}
                            name={`${friend.first_name + ' ' + friend.last_name}`}
                            age={friend.age}
                            tags={[friend.level, friend.faculty]}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default FriendsView; 
// import React, { useState, useEffect } from 'react'
// import axios from "axios"
// import '../styles/chatlistview.css'
// import {friendsBadge} from "../Components/friendsBadge"


// const ChatListView = () => {
//     // const [messagesList, setMessagesList] = useState([])
//     // const [chatFriends, setChatFriends] = useState([])
//     // const [friendsName, setFriendsName] = useState([])

//     // const [listIds, setListIds] = useState([])
//     // var global = []

//     // const getMessageList = () => {
//     //     axios.get("http://localhost:3004/chat/?chatMember=1")
//     //         .then((response => {
//     //             setMessagesList(response.data)
//     //             setChatFriends(response.data)


//     //             for (let i = 0; i < response.data.length; i++) {
//     //                 var cur = response.data[i].chatMembers[i]?.first_name + " " + response.data[i].chatMembers[i]?.last_name
//     //                 global.push(cur)
//     //             }


//     //             console.log(friendsName)


//     //             return response
//     //         })).then((res) => console.log(res.data))
//     //         .catch((error) => console.log(error))
//     // }





//     // useEffect(() => {
//     //     getMessageList()

//     // }, [])

//     // return (
//     //     <div>

//     //         {/* {friendsName.msap((friend, index) =>  (
//     //             <li style={{color: "black"}} key={index}> {friend} </li>
//     //         ))} */}
//     //         <li> </li>
//     //     </div>
//     // )
// }

// export default ChatListView

import React, { useState, useEffect } from "react"
import { IoOptions } from "react-icons/io5"
import axios from "axios"
import ChatList from "../Components/chatList"
import profile1 from "../images/david-laid.jpg"
import "../styles/friendsview.css";

const ChatListView = () => {
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
                        <ChatList
                            className="friend-item"
                            key={i}
                            index={i}
                            thumbnail={require(`../images/${friend.id}.jpg`)}
                            name={`${friend.first_name + ' ' + friend.last_name}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ChatListView; 
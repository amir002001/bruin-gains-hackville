import React, {useState, useEffect} from 'react'
import axios from "axios"



const ChatListView = () => {
    const [messagesList, setMessagesList] = useState([])
    const [chatFriends, setChatFriends] = useState({})
    const [listIds, setListIds] = useState([])
    var global = []

    const getMessageList = () => {
        axios.get("http://localhost:3004/chat/?chatMember=1")
        .then((response => {
            setMessagesList(response.data)
            setChatFriends(response.data)
            console.log(response.data[0])

            return response
        })).then((res) => console.log(res.data))
        .catch((error) => console.log(error))
    }





    useEffect(() => {
        getMessageList()
       
    }, [])

    return (
        <div> 
            
            {chatFriends.map((friend, index) =>  (
                <li key={friend.chatMembers}> {friend.first_name} </li>
            ))}
            <li> </li>
        </div>
    )
}

export default ChatListView
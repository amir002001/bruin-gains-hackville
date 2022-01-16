import React, {useState, useEffect} from 'react'
import axios from "axios"



const ChatListView = () => {
    const [messagesList, setMessagesList] = useState([])
    const [chatFriends, setChatFriends] = useState([])
    const [listIds, setListIds] = useState([])

    const getMessageList = () => {
        axios.get("http://localhost:3004/chat/?chatMember=1")
        .then((response => {
  
            setMessagesList(response.data)

            for(let i = 0; i < response.data.length; i++){
                var curIds = response.data[i].chatMembers
                curIds.filter((num) => {
                    if (num != 1){
                        setListIds(oldList => [...oldList, num])
                    }
                })
            }
            console.log(listIds)
            
            
            return response
        })).then((res) => console.log(res))
        .catch((error) => console.log(error))
    }

    const getFriendsNames = async () => {
        for(let i = 0; i < listIds.length; i++){
           const response = axios(`http://localhost:3004/chat/user/${listIds[i]}`).then((response)=> {
                
           })

        }

        
    }


    useEffect(() => {
        getMessageList().then(() =>  getFriendsNames())
       
    }, [])

    return (
        <div> 
            {/* {messagesList.map((message, index) => (
                <li> message?.chatHistory</li>
            ))} */}
            <li> </li>
        </div>
    )
}

export default ChatListView
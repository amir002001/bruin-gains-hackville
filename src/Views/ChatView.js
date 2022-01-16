import React, { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css';
import '../styles/chatview.css'
import { getAuth, onAuthStateChanged, getDoc, setDoc, updateDoc, doc, db, onSnapshot } from "../Database/firebaseConfig"
const ChatView = () => {
    const [message, setMessage] = useState("")
    const user = localStorage.getItem("currentUser")
    const [currentUser, setCurrentUser] = useState(user)
    const auth = getAuth();
    const id = localStorage.getItem("Id")
    

    const [comingMessages, setComingMessages] = useState([
        {
            "name": "Adnan",
            "message": "Yo",
            "time": Date.now(),
            "isMe": false
        },
        {
            "name": "Adnan",
            "message": "Yo",
            "time": Date.now(),
            "isMe": false
        },
        {
            "name": "Adnan",
            "message": "what",
            "time": Date.now(),
            "isMe": true
        },
    ])

     //const unsub =  onSnapshot(doc(db, "users", id)).then((res) => console.log(res))




    // useEffect(() => {
    //     if (localStorage.getItem("Id") === null) {
    //         alert("Please login")
    //     }

    //     getDoc(doc(db, "users",  id)).then((res) => 
    //     {
    //         console.log(res.data())
    //         setCurrentUser(res)
    //     })
    //     .catch((err) => alert(err))
    // },[])

    const SendMessage = () => {
        //use fetch on api to add message var when when the button gets clicked

        //after the api fetch/request clear the message variable and input
        setMessage("")
        document.getElementById("msg-input").value = ""
    }

    const FetchMessages = () => {
        //fetch from api and add to comingMessages list
    }
    return (
        <div className="chat-page">
            <div className="title-name">
                <h1 style={{color: "black"}}> {currentUser?.name} </h1>
                <h1>{currentUser?.name}</h1>
                <div>
                    {/* {

                        comingMessages.map((msg, idx) => (
                            <tbody>

                                <td style={msg.isMe ? { textAlign: "right", color: "red", paddingLeft: 280 } : { textAlign: "left" }} key={idx}>{msg.isMe ? "me" : msg.name}:{msg.message}</td>
                            </tbody>
                        ))

                    } */}
                </div>



            </div>

            <div className="write-msg-holder">
                <input id="msg-input" onChange={(e) => setMessage(e.target.value)} placeholder="Write a message" className="text-form" type="text" name="name" />
                <button onClick={SendMessage} className="send-msg" />
            </div>
        </div>
    )
}

export default ChatView; 
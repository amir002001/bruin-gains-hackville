import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css';
import '../styles/chatview.css'


const ChatView = () => {
    const [message, setMessage] = useState("")
    return (

        <div className="chat-page">
            <div className="title-name">
                <h1> James Wilson </h1>
            </div>

            <div className="write-msg-holder">
                <input className="text-form" type="text" name="name" />
                <button className="send-msg"/>
            </div>
        </div>
    )
}

export default ChatView; 
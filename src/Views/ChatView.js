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

            <div>
                {/* <Form className="text-form" controlId="{exampleForm.ControlInput1}">
                    <Form.Control
                        className="text-form"
                        type="input"
                        placeholder="Write a message"
                        required
                        onChange={(e) => setMessage(e.target.value)}>
                    </Form.Control>
                </Form> */}
                <form>
                <label>
                    <input className="text-form" type="text" name="name" />
                </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default ChatView; 
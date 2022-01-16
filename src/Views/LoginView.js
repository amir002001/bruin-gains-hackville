import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "../Database/firebaseConfig"
const LoginView = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const auth = getAuth()
    const LoginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                localStorage.setItem("isLoggedIn", true)
                localStorage.setItem("Id", res.user.uid)
                localStorage.setItem("currentUser", res.user)

            })
            .then(navigate("/"))
            .catch((err) => alert(err))
    }
    return (
        <div className='m-5'>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="text" onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={LoginUser} className="mb-3"><FaGoogle /> Login with google</Button>
            <a style={{ margin: 21 }} href="/Signup">New? Signup here </a>
        </div>

    )
}

export default LoginView
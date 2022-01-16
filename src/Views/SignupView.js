import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, db, doc, setDoc } from "../Database/firebaseConfig"
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';


const SignupView = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const auth = getAuth()
    const LoginUser = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                const newUser = {
                    name: name,
                    email: email,
                    id: response.user.uid
                }
                setDoc(doc(db, "users", response.user.uid), newUser);
                return newUser
            }).then((res) => {
                localStorage.setItem("isLoggedIn", true)
                localStorage.setItem("Id", res.id)
                localStorage.setItem("currentUser", res)
            })
            .then((res) => navigate("/"))
            .catch((err) => alert(err))
    }
    return (
        <div className='m-5'>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control onChange={(event) => setName(event.target.value)} type="text" onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="text" onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={LoginUser} className="mb-3"><FaGoogle /> Login with google</Button>
        </div>

    )
}

export default SignupView 
import React, {useState} from 'react'
import {createUserWithEmailAndPassword, getAuth, db, doc, setDoc} from "../Database/firebaseConfig"
import { useNavigate } from "react-router-dom";


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
                email : email,
                id: response.user.uid
            }
            setDoc(doc(db, "users", response.user.uid), newUser);
            return newUser
        }).then((res) => {
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("Id", res.id)
        })
        .then((res) => navigate("/"))
        .catch((err) => alert(err))
    }
    return (
        <div style={{margin: 100}}> 

            <input type='text' placeholder='Enter your name' 
            onChange={(event) => setName(event.target.value)} required></input>


            <input type='email' placeholder='Enter your email' 
            onChange={(event) => setEmail(event.target.value)} required></input>

            <input type='password' placeholder='Enter your passwoed' 
            onChange={(event) => setPassword(event.target.value)} required></input>


            <button onClick={LoginUser} style={{margin: 50}}>Login with google</button>
        </div>

    )
}

export default SignupView 
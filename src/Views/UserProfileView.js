import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Button } from "react-bootstrap"
import { Badge } from "react-bootstrap"
import { useParams } from "react-router-dom"
import "../styles/profile.css"

const UserProfileView = () => {
    let params = useParams()
    const [user, setUser] = useState()
    const addFriend = () => {
        axios.put("http://localhost:3004/user/1",
            {
                "id": 1,
                "first_name": "Matelda",
                "last_name": "Canti",
                "email": "mcanti0@ibm.com",
                "gender": "Female",
                "age": 82,
                "faculty": "PSB",
                "level": "intermediate",
                "friends": [
                    params.id
                ]
            },
        ).then(response => console.log(response))
    }

    const getProfileInfo = () => {
        axios(`http://localhost:3004/user/${params.id}`)
            .then((response) => {
                setUser(response.data)
                return response
            }).then((res) => console.log(res))
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        getProfileInfo()
    }, [])


    return (
        <div className="profile-page">
            <div className='profile-photo'>
                <img width='100%' src={require(`../images/${params.id}.jpg`)}/>
            </div>
            <div className="profile-text">
                    {/* <h6>id is {params.id}</h6> */}
                <h1>
                    {user?.first_name} {user?.last_name}, {user?.age}
                </h1>
                <div>
                    <Button onClick={addFriend}>Add Friend</Button>
                </div>
                <Badge pill bg="primary">
                    {user?.level}
                </Badge>
                <Badge pill bg="success">
                    {user?.faculty}
                </Badge>
                <h1>About Me</h1>
                <p>{user?.bio}</p>
                <h1>My Fitness Goals</h1>
                {user?.goals}
            </div>
        </div>
    )
}

export default UserProfileView
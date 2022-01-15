import axios from "axios"
import { Button } from "react-bootstrap"
import { Badge } from "react-bootstrap"


const UserProfileView = () => {

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
                    {
                        "id": 2,
                        "first_name": "Dot",
                        "last_name": "Povall",
                        "email": "dpovall1@newyorker.com",
                        "gender": "Male",
                        "age": 18,
                        "faculty": "PSB",
                        "level": "beginner",
                        "friends": []
                    }
                ]
            },
        ).then(response => console.log(response))
    }

    return (
        <div>
            <img src={require("../images/david-laid.jpg")} width={200}>
            </img>
            <h1>
                David Laid, 23
            </h1>
            <div>
                <Button onClick={addFriend}>Add Friend</Button>
            </div>
            <Badge pill bg="primary">
                Beginner
            </Badge>
            <Badge pill bg="secondary">
                Lose Weight
            </Badge>
            <Badge pill bg="success">
                FAAD
            </Badge>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!</p>
            <h1>My Fitness Goals</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!</p>
        </div>
    )
}

export default UserProfileView
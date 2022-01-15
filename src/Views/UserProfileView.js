import { Badge } from "react-bootstrap"


const UserProfileView = () => {
    return (
        <div>
            <img src={require("../images/david-laid.jpg")} width={200  }>
            </img>
            <h1>
                David Laid, 23
            </h1>
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
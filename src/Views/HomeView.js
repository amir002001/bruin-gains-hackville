import React from "react"
import { IoOptions } from "react-icons/io5"
import ProfileBadge from "../Components/profileBadge"
import profile1 from "../images/david-laid.jpg"


const HomeView = () => {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
                <h2 style={{margin: "40px 0 0 20px"}}> Discover</h2>
                <IoOptions  style={{margin: "45px 20px 0 0"}} size={30}/>
                {/* <h1> Discover</h1>
                <IoOptions size={30}/> */}
            </div>
        
            <div className="profiles-container">
                <ProfileBadge
                    className="profile-item"
                    // key={i}
                    // index={i}
                    date="Dec. 17th"
                    partner={profile1}
                    thumbnail={profile1}
                    workouttype="cardio"
                    tags={["lose weight", "intermediate"]}
                />
            </div>
        </div>
    )
}

export default HomeView; 
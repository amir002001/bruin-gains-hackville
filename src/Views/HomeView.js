import React from "react";
import { IoOptions } from "react-icons/io5";
import SessionBadge from "../Components/sessionBadge";
import sessionbg from "../images/sessionbg.jpeg";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";
import ProfileBadge from "../Components/profileBadge";
import "../styles/sessionbadge.css";

const HomeView = () => {
  return (
    <div style={{ margin: "20px 0 0 10px" }}>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      > */}

      <h2 style={{ margin: "60px 0 0 10px" }}> Welcome, James.</h2>
      <h4 style={{ margin: "40px 0 20px 10px" }}>Upcoming Workouts:</h4>

      <div
        className="sessions-container"
        styles={{ height: "500px", overflow: "auto", display: "flex" }}
      >
        <SessionBadge
          className="profile-item"
          // key={i}
          // index={i}
          date="Friday Dec. 17th"
          partner={sessionbg}
          thumbnail={sessionbg}
          workouttype="cardio"
          tags={["lose weight", "intermediate"]}
        />
        <SessionBadge
          className="session-item"
          // key={i}
          // index={i}
          thumbnail={sessionbg}
          name="Jon Smith"
          age="23"
          tags={["lose weight", "intermediate"]}
        />
        <SessionBadge
          className="session-item"
          // key={i}
          // index={i}
          thumbnail={sessionbg}
          name="Jon Smith"
          age="23"
          tags={["lose weight", "intermediate"]}
        />
        <SessionBadge
          className="session-item"
          // key={i}
          // index={i}
          thumbnail={sessionbg}
          name="Jon Smith"
          age="23"
          tags={["lose weight", "intermediate"]}
        />
      </div>

      <h4 style={{ margin: "40px 0 20px 10px" }}>Plan Session With:</h4>

      <div
        className="sessions-container"
        styles={{ height: "500px", overflow: "auto", display: "flex" }}
      >
        <ProfileBadge
          className="profile-item"
          // key={i}
          // index={i}
          thumbnail={profile1}
          name="Jon Smith"
          age="23"
          tags={["lose weight", "intermediate"]}
        />
        <ProfileBadge
          className="profile-item"
          // key={i}
          // index={i}
          thumbnail={profile1}
          name="Jon Smith"
          age="23"
          tags={["lose weight", "intermediate"]}
        />
        <ProfileBadge
          className="profile-item"
          // key={i}
          // index={i}
          thumbnail={profile1}
          name="Jon Smith"
          age="23"
          tags={["lose weight", "intermediate"]}
        />
        <ProfileBadge
          className="profile-item"
          // key={i}
          // index={i}
          thumbnail={profile1}
          name="Jon Smith"
          age="23"
          tags={["lose weight", "intermediate"]}
        />
        <ProfileBadge
          className="profile-item"
          // key={i}
          // index={i}
          thumbnail={profile1}
          name="Jon Smith"
          age="23"
          tags={["lose weight", "intermediate"]}
        />
      </div>
    </div>
  );
};

export default HomeView;


// import React from "react"
// import { IoOptions } from "react-icons/io5"
// import ProfileBadge from "../Components/profileBadge"
// import profile1 from "../images/david-laid.jpg"


// const HomeView = () => {
//     return (
//         <div>
//             <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
//                 <h2 style={{margin: "40px 0 0 20px"}}> Discover</h2>
//                 <IoOptions  style={{margin: "45px 20px 0 0"}} size={30}/>
//                 {/* <h1> Discover</h1>
//                 <IoOptions size={30}/> */}
//             </div>
        
//             <div className="profiles-container">
//                 <ProfileBadge
//                     className="profile-item"
//                     // key={i}
//                     // index={i}
//                     date="Dec. 17th"
//                     partner={profile1}
//                     thumbnail={profile1}
//                     workouttype="cardio"
//                     tags={["lose weight", "intermediate"]}
//                 />
//             </div>
//         </div>
//     )
// }

// export default HomeView; 
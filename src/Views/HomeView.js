import React, {useState, useEffect} from "react";
import { IoOptions } from "react-icons/io5";
import SessionBadge from "../Components/sessionBadge";
// import sessionbg from "../images/sessionbg.jpeg";
import p1 from "../images/1.jpg";
import p2 from "../images/2.jpg";
import p3 from "../images/3.jpg";
import ProfileBadge from "../Components/profileBadge";
import "../styles/sessionbadge.css";
import axios from "axios";

const HomeView = () => {
  
  var [users, setUsers] = useState([]);
  let [sessions, setSessions] = useState([])
  
  function shuffleUsers(x, y){
    return Math.random() - 0.5;
  }


  useEffect(() => {
    axios.get("http://localhost:3004/user").then((resp)=> {
      resp.data.sort(shuffleUsers);
      console.log(resp.data)
      setUsers(resp.data);
    })
    
    
   axios.get("http://localhost:3004/session").then(resp => {
    setSessions(resp.data)
  }).then(()=> console.log(sessions))
    
  }, [])


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
        {sessions.map((session, i)=> {
          let date = new Date(session.date*1000)
          let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
          return(<SessionBadge
            className="profile-item"
            key={i}
            index={i}
            date={`${date.toLocaleDateString("en-US", options)}`}
            partner={session.partner}
            thumbnail={require(`../images/${session['workout-type']}.jpg`)}
            workouttype="cardio"
            tags={["lose weight", "intermediate"]}
          />)
        })}
        
      </div>

      <h4 style={{ margin: "40px 0 20px 10px" }}>Plan Session With:</h4>

      <div
        className="sessions-container"
        styles={{ height: "500px", overflow: "auto", display: "flex" }}
      >
        {users.map((user, i)=> {
          return (
          <ProfileBadge
          className="profile-item"
          key={i}
          index={i}
          thumbnail= {require(`../images/${user.id}.jpg`)}
          name={user.first_name}
          age={user.age}
          tags={[user.faculty,user.level]}
        />
        )}
      )}
        
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
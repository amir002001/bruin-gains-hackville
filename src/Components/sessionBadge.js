import "../styles/profilebadge.css";
import React, { useState, useEffect } from "react";

export default function ProfileBadge({
  id,
  date,
  thumbnail,
  partner,
  workouttype,
  index,
}) {
  return (
    <button
      className="session-container"
    //   onClick={() => window.open("viewproject/" + index, "_self")}
    >
      {/* <img src={thumbnail}></img> */}
      {/* <div className="bg-container"> */}
      <div
        className="session-bg"
        style={{
          background: `url(${thumbnail})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>

            <div className="session-title">
                <p className="session-name">{name}</p>
            </div>
        </div>

    
      {/* </div> */}

      
    </button>
  );
}

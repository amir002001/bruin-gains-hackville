import "../styles/profilebadge.css";
import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap"


export default function SessionBadge({
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
      <div
        className="session-bg"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 100%), url(${thumbnail})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="session-title">
          <p className="session-date">{date}</p>
        </div>
      </div>

      {/* </div> */}
    </button>
  );
}

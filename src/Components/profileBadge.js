import "../styles/profilebadge.css";
import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap"

export default function ProfileBadge({
  id,
  title,
  name,
  thumbnail,
  icons,
  index,
  tags
}) {
  return (
    <button
      className="box-container"
    //   onClick={() => window.open("viewproject/" + index, "_self")}
    >
      {/* <img src={thumbnail}></img> */}
      {/* <div className="bg-container"> */}
      <div
        className="profile-bg"
        style={{
          background: `url(${thumbnail})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>

        <div className="profile-title">
          <p className="profile-name">{name}</p>
        </div>
        <div className="bagdes">
          <Badge className="badge" pill bg="primary">
            {tags[1][0].toUpperCase() + tags[1].slice(1)}
          </Badge>
          <Badge className="badge" pill bg="secondary">
            {tags[0]}
          </Badge>
        </div>
      </div>


      {/* </div> */}


    </button>
  );
}

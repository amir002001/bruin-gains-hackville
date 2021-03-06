import "../styles/profilebadge.css";
import React, { useState, useEffect } from "react";
import { Badge, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

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
      className="friend-container"
    //   onClick={() => window.open("viewproject/" + index, "_self")}
    >
      {/* <img src={thumbnail}></img> */}
      {/* <div className="bg-container"> */}
      <div
        className="friend-bg"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 100%), url(${thumbnail})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>

        <div className="friend-title">
          <p className="friend-name">{name}</p>
        </div>
        <div className="bagdes">
          <Badge className="badge" pill bg="primary">
            {tags[1][0].toUpperCase() + tags[1].slice(1)}
          </Badge>
          <Badge className="badge" pill bg="secondary">
            {tags[0]}
          </Badge>
        </div>
        <div className="friends-buttons">
          <Link to={"/chatview"}>
            <Button>
              Send Message
            </Button>
          </Link>
          <Link to={"/createsessionview"}>
            <Button>
              Plan a Session
            </Button>
            </Link>
        </div>
      </div>


      {/* </div> */}


    </button>
  );
}

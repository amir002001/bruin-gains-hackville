import "../styles/profilebadge.css";
import React, { useState, useEffect } from "react";
import { Badge, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function ChatList({
  name,
  icons,
  index,
  thumbnail
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

        </div>
        <div className="friends-buttons">
          <Link to={"/chatview"}>
            <Button>
              3 Messages. Chat
            </Button>
          </Link>
        </div>
      </div>


      {/* </div> */}


    </button>
  );
}

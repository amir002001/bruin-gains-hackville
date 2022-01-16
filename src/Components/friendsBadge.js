import "../styles/profilebadge.css";
import React, { useState, useEffect } from "react";
import { Badge, Button } from "react-bootstrap"

export default function ProfileBadge({
  id,
  title,
  name,
  thumbnail,
  icons,
  index,
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
          background: `url(${thumbnail})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>

            <div className="friend-title">
                <p className="friend-name">{name}</p>
            </div>
            <div className="bagdes">
              <Badge className="badge" pill bg="primary">
                  Lose Weight
              </Badge>
              <Badge className="badge" pill bg="secondary">
                  FAAD
              </Badge>
            </div>
            <div className="friends-buttons">
                <Button>
                    Send Message
                </Button>
                <Button>
                    Plan a Session
                </Button>
            </div>
        </div>

    
      {/* </div> */}

      
    </button>
  );
}

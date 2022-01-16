import "../styles/profilebadge.css";
import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function ProfileBadge({
  index,
  title,
  name,
  thumbnail,
  icons,
  tags,
  friendId
}) {
  return (
    <Link to={`/profiles/${index}`}
      className="box-container"
      // onClick={() => window.open("/createSessionView", "_self")}
    >
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
    </Link>
  );
}

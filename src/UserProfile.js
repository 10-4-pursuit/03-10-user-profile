import React from "react";

function UserProfile(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>{props.location}</p>
    </div>
  );
}

export default UserProfile;